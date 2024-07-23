import tkinter as tk
from tkinter import filedialog
import zipfile
import os

def select_directory():
    root = tk.Tk()
    root.withdraw()
    directory = filedialog.askdirectory(title="مسیر مبدا را انتخاب کنید")
    if directory:
        backup_directory(directory)

def backup_directory(directory):
    root = tk.Tk()
    root.withdraw()
    destination_directory = filedialog.askdirectory(title="مسیر مقصد را انتخاب کنید")
    if destination_directory:
        zip_filename = os.path.join(destination_directory, 'backup.zip')
        with zipfile.ZipFile(zip_filename, 'w') as zipf:
            for root, dirs, files in os.walk(directory):
                for file in files:
                    zipf.write(os.path.join(root, file), os.path.relpath(os.path.join(root, file), directory))
        print(f"فایل ZIP با موفقیت ساخته شد: {zip_filename}")

if __name__ == "__main__":
    select_directory()
