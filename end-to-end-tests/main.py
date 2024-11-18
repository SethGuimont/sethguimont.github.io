import unittest
from selenium import webdriver

class ProfileTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_home(self):
        driver = self.driver
        driver.get("https://sethguimont.github.io")
        self.assertIn("Home", driver.title)

    def test_contact(self):
        driver = self.driver
        driver.get("https://sethguimont.github.io/contact.html")
        self.assertIn("Contact", driver.title)

    def test_discord(self):
        driver = self.driver
        driver.get("https://sethguimont.github.io/discord.html")
        self.assertIn("Discord", driver.title)

    def test_blog(self):
        driver = self.driver
        driver.get("https://sethguimont.github.io/blog.html")
        self.assertIn("Blog", driver.title)

    def test_projects(self):
        driver = self.driver
        driver.get("https://sethguimont.github.io/projects.html")

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
