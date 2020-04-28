# CMPM163Labs

lab4:
video link: https://drive.google.com/file/d/1QkUAiWr50jjeJyz0P6A5Ej4OMn59Bh6E/view?usp=sharing

cube 1:
- built in three.js texture, flat texture with no normal map, grass texture on far left

cube 2:
- built in three.js texture, texture with matching normal map, grass texture in middle

cube 3:
- built in three.js texture with a different pair of texture and normal map, brick texture.

cube 4:
- texture loaded with shader from following the lab, with metal texture.

cube 5:
- tile texture made by performing claculations in the fragment shader.
- I solved this by creating a new vec 2 that was almost double the vUv vec2 and then performed a modulus operation on both the x and y parts of the new vector by 1.0.

Questions from Lab:

a) What is the formula given a u value of the uv coordinate (a value between 0 and 1), I get the x value of the pixel to sample from in this 8x8 texture?
    
    - x = 7u
    
b) What is the formula given a v value of the uv coordinate (a value between 0 and 1), I get the y value of the pixel to sample from in this 8x8 texture?
    
    - y = 7v
    
c) What color is sampled from the texture at the uv coordinate (0.375, 0.25)? (sample from the image based on the number your formula gives you i.e. (1, 0) is blue)
    
    - The color is grey.


lab3: https://drive.google.com/file/d/1zXYlh6g8A_hYIIJxuvV1UadZ0YkqL02M/view?usp=sharing

Cube1:
    - my fragment shader made with interpolation  0xABFFCC 0xFFC0CB
    
Cube2:
    - A cube with a green specular highlight made with three.js phong material
    
Cube3/4:
    -The top and bottom cubes made with a normal material 
    
Cube5:
    -fragment shader made with interpolation  0xACB6E5 0x74ebd5
    


lab2: https://drive.google.com/file/d/1um7rsxItelPrQJbGDyNUcufro9Pta85l/view?usp=sharing
![](lab2/models.png)

