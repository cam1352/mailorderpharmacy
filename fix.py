import os

filepath = r'src/app/locations/[city]/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the first closing of the function
target = '  );\n}'
idx = content.find(target)

if idx != -1:
    new_content = content[:idx + len(target)] + '\n'
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Successfully truncated the file.')
else:
    print('Target not found.')
