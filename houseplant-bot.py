from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import json
import re
chrome_options = Options()
chrome_options.add_argument("--headless")
PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH, chrome_options=chrome_options)
BASE_URL = 'https://redsquareflowers.com'

PLANT_LIST = []


for page in range(1, 4):
    driver.get(
        f'{BASE_URL}/product-category/houseplants-planters-madison-wi/page/{page}/')
    time.sleep(3)
    plantData = driver.find_elements_by_class_name(
        "product_cat-houseplants-planters-madison-wi")
    counter = 1
    for plant in plantData:
        plant_image = driver.find_element_by_xpath(
            f'//*[@id="left-area"]/ul/li[{counter}]/a/span[1]/img').get_attribute('src')

        plant_split = plant.text.split("\n")
        name = plant_split[0].title()
        price = plant_split[1].split(" ")[0]

        # Add to list
        PLANT_LIST.append({"name": name, "price": price, "image": plant_image})
        counter += 1
    print(page)

# # Get details about the plant : light, water, etc. requirements
for i in range(len(PLANT_LIST)):
    name = re.sub(' \([^)]*\)', "", PLANT_LIST[i]["name"])
    # name = name.replace(" OF", "")
    nameSearch = "-".join(name.split(" "))
    try:
        driver.get(f'{BASE_URL}/product/{nameSearch}')
        details = driver.find_element_by_class_name(
            'woocommerce-product-details__short-description').text
    except:
        try:
            driver.get(f'{BASE_URL}/product/{nameSearch.split(" ")[0]}')
            details = driver.find_element_by_class_name(
                'woocommerce-product-details__short-description').text
        except:
            details = ""
        details = ""
    PLANT_LIST[i]["details"] = details.strip().capitalize()
# Add to json file
out_file = open("src\db.json", "w")
json.dump(PLANT_LIST, out_file, indent=6)
out_file.close()

driver.quit()
