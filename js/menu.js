// Menu Data
const menuData = [
    // 🥤 Jugos Tropicales
    { id: 1, name: "Agrio", category: "Jugos", price: 150, ingredients: ["Chinola", "limón", "naranja"], image: "https://lh3.googleusercontent.com/d/1tGEPmnXDq7AL38aStHexEm081CUNEbkZ" },
    { id: 2, name: "Piña", category: "Jugos", price: 120, ingredients: ["Piña fresca"], image: "https://lh3.googleusercontent.com/d/1-FKB762z7ati5cGGxCduLSGF9_SNCHrl" },
    { id: 3, name: "Mangola", category: "Jugos", price: 160, ingredients: ["Mango", "chinola"], image: "https://lh3.googleusercontent.com/d/1okUydf8EhEspD0hSVtDtZs5U3lxtxzAt" },
    { id: 4, name: "Pasión Caribeña", category: "Jugos", price: 170, ingredients: ["Maracuyá", "frutas tropicales"], image: "https://lh3.googleusercontent.com/d/12qUzoqJX7rxQt2XhaVaJ5kjactG24xV8" },
    { id: 5, name: "Sonrisa Tropical", category: "Jugos", price: 180, ingredients: ["Frutas mixtas"], image: "https://lh3.googleusercontent.com/d/1Nobycr3fnYtr3YfD5P6Eg1EQ0WMPAYq5" },
    { id: 6, name: "Zapote", category: "Jugos", price: 140, ingredients: ["Zapote maduro"], image: "https://lh3.googleusercontent.com/d/11vOqHjLgspCRO083PHJKxr2qNPnQHITZ" },
    { id: 7, name: "Fresa Tropical", category: "Jugos", price: 160, ingredients: ["Fresas", "leche condensada"], image: "https://lh3.googleusercontent.com/d/13U_tjM8SXNePA4G0mLvVd2ZHZ4aDZ3y2" },
    { id: 8, name: "Melón", category: "Jugos", price: 130, ingredients: ["Melón", "limón"], image: "https://lh3.googleusercontent.com/d/1PpDqwkXrvtvpDDNTJKmd-8dTzo0lgnjb" },
    { id: 9, name: "Granadilla", category: "Jugos", price: 170, ingredients: ["Granadilla", "miel"], image: "https://lh3.googleusercontent.com/d/1b7dX7xIBz1T26uzWm9hWoqcnn58TPDR1" },
    { id: 10, name: "Lechoza", category: "Jugos", price: 150, ingredients: ["Lechoza", "jengibre"], image: "https://lh3.googleusercontent.com/d/1ukhM4mIh61fVTv2MpO2pxV4hFaiz6CeR" },
    { id: 11, name: "Frechiza", category: "Jugos", price: 190, ingredients: ["Fresa", "higo", "zarzamora"], image: "https://lh3.googleusercontent.com/d/13TaxQxX-oKUal1Grx2VekuCEzFaqG8iq" },
    { id: 12, name: "Combinación Tropical", category: "Jugos", price: 200, ingredients: ["Variedad de frutas tropicales"], image: "https://lh3.googleusercontent.com/d/1ZbXr4JPY5j8xgtL3-5B3T2FPwu7Ep7ur" },

    // 🍹 Cócteles Tropicales
    { id: 13, name: "Vodka Tropical", category: "Cócteles", price: 350, ingredients: ["Vodka", "jugos tropicales", "hielo"], image: "https://lh3.googleusercontent.com/d/1V-x0_V07mzDJTwa99AwGUSC9zBny3u3M" },
    { id: 14, name: "Copa de Sangría", category: "Cócteles", price: 300, ingredients: ["Vino tinto", "frutas", "azúcar"], image: "https://lh3.googleusercontent.com/d/13FudNjWsXqFv9mEeFv7aUp1qT-0lD_13" },
    { id: 15, name: "Trabucazo", category: "Cócteles", price: 380, ingredients: ["Ron", "licores variados", "frutas"], image: "https://lh3.googleusercontent.com/d/1goRQnNUbxtt0jfncTAglk23Wkt5lSRmn" },
    { id: 16, name: "Néctar Caribe", category: "Cócteles", price: 320, ingredients: ["Ron", "coco", "piña"], image: "https://lh3.googleusercontent.com/d/1UXYEzSPP5FQuCVTbW39Y2WXWQWmu1eRr" },
    { id: 17, name: "Piña Colada Tropical", category: "Cócteles", price: 340, ingredients: ["Ron", "crema de coco", "piña"], image: "https://lh3.googleusercontent.com/d/1UXYEzSPP5FQuCVTbW39Y2WXWQWmu1eRr" },
    { id: 18, name: "Margarita", category: "Cócteles", price: 310, ingredients: ["Tequila", "licor de naranja", "limón"], image: "https://lh3.googleusercontent.com/d/12xoFQcnRjWzdvsusfpTRhq5pOz9RhJzp" },
    { id: 19, name: "Suave Diferencia", category: "Cócteles", price: 360, ingredients: ["Whiskey", "licor de durazno", "limón"], image: "https://lh3.googleusercontent.com/d/1jnKQdkzhYb8nCFYLTyt7pZAKHa_3qPeS" },
    { id: 20, name: "Amor de Verano", category: "Cócteles", price: 330, ingredients: ["Vodka", "licor de fresa", "limón"], image: "https://lh3.googleusercontent.com/d/1sYRww4wLmEm0rpuTXDHQLrYUObxTjdOf" },
    { id: 21, name: "Licor Tropical", category: "Cócteles", price: 280, ingredients: ["Licor de frutas tropicales"], image: "https://lh3.googleusercontent.com/d/1sYRww4wLmEm0rpuTXDHQLrYUObxTjdOf" },

    // 🍽️ Entradas / Aperitivos
    { id: 22, name: "Croquetas de Pollo", category: "Entradas", price: 220, ingredients: ["Pollo desmenuzado", "pan rallado", "especias"], image: "https://lh3.googleusercontent.com/d/1W_v3msi-wuzWFMPpTmNTsFs8sV3OdviS" },
    { id: 23, name: "Salchichas a la Parrilla", category: "Entradas", price: 250, ingredients: ["Salchichas premium", "salsa especial"], image: "https://lh3.googleusercontent.com/d/1FJSy70Rvl3t53xs2TGHbAA-IY8Zck1S8" },
    { id: 24, name: "Medio Sabrococho", category: "Entradas", price: 180, ingredients: ["Sopa tradicional dominicana"], image: "https://lh3.googleusercontent.com/d/1xkNgLI6MaBR7NFla4-yU4SWWfSu_bM4T" },
    { id: 25, name: "Arepa rellena", category: "Entradas", price: 120, ingredients: ["Harina de maíz", "queso", "aceite"], image: "https://lh3.googleusercontent.com/d/15Wxm_AtV9B1FDD4uhh0qRU1B0LKqPcQP" },
    { id: 26, name: "Cóctel de Camarones", category: "Entradas", price: 380, ingredients: ["Camarones frescos", "cóctel de mariscos"], image: "https://lh3.googleusercontent.com/d/12XCtt0ddjfJ7RkVkF4wopZWUmYe-32A2" },
    { id: 27, name: "Palitos del Mar", category: "Entradas", price: 280, ingredients: ["Pescado empanizado", "salsa tártara"], image: "https://lh3.googleusercontent.com/d/1lcUNCbfQvUHzfaHRNAhJ2QLhQJ7gyFCR" },
    { id: 28, name: "Bolitas de Pescado", category: "Entradas", price: 260, ingredients: ["Pescado molido", "especias", "harina"], image: "https://lh3.googleusercontent.com/d/1DgZg7GoWh1h0yIh4SckEAzYa3x5mFFLH" },
    { id: 29, name: "Ceviche Tropical", category: "Entradas", price: 320, ingredients: ["Pescado blanco", "limón", "cebolla morada", "cilantro"], image: "https://lh3.googleusercontent.com/d/1E4RtPtYb8TUnY7NZfF0jQSdRvvCpiy29"},
    { id: 30, name: "Salpicón de Chicharrón", category: "Entradas", price: 290, ingredients: ["Chicharrón de cerdo", "verduras", "salsa"], image: "https://lh3.googleusercontent.com/d/1Pw7dWkucQQm-7e89ovqjIApV6G0MD6aI"},
    { id: 31, name: "Catibías", category: "Entradas", price: 240, ingredients: ["Masa de maíz", "relleno de cerdo/queso/Angus"], image: "https://lh3.googleusercontent.com/d/1HuaM0PCoVB9kKt_E4Hg27fS5IDFR_bjB"},
    { id: 32, name: "Quipe Árabe", category: "Entradas", price: 230, ingredients: ["Carne molida", "especias árabes", "pan plano"], image: "https://lh3.googleusercontent.com/d/1jrT5cOFQSTnCjSuV726GpVgKJCSkcj3J" },

    // 🍲 Sopas y Caldos
    { id: 33, name: "Sabrococho", category: "Sopas", price: 200, ingredients: ["Carne de res", "yuca", "plátano", "maíz"], image: "https://lh3.googleusercontent.com/d/1LzutHOWvQ9xiXnoc4Inxk_hICsyykQgM" },
    { id: 34, name: "Cocido", category: "Sopas", price: 220, ingredients: ["Carne de res", "verduras", "frijoles"], image: "https://lh3.googleusercontent.com/d/1qD2CqMpgNErKKiCrnneTGGbiPxbRgIYi" },
    { id: 35, name: "Mondongo", category: "Sopas", price: 250, ingredients: ["Mondongo", "verduras", "yuca"], image: "https://lh3.googleusercontent.com/d/1jzbV76aeDHGxseb9UzO2e-CbP2c1zfwW" },
    { id: 36, name: "Sopa de Pollo", category: "Sopas", price: 180, ingredients: ["Pollo", "fideos", "zanahoria", "apio"], image: "https://lh3.googleusercontent.com/d/1cvZlwWLb45VGtUPvRyGW55GJr-_hso9_" },
    { id: 37, name: "Sopa del Mar", category: "Sopas", price: 320, ingredients: ["Mariscos variados", "caldo de pescado"], image: "https://lh3.googleusercontent.com/d/12J3K4p-a354D5b3EJHE0OYHy4f6EjJv-" },

    // 🍗 Fritos & Mofongos
    { id: 38, name: "Mini Mofongo", category: "Fritos", price: 180, ingredients: ["Plátanos verdes", "cerdo", "caldo"], image: "https://lh3.googleusercontent.com/d/1wk8JYGAmHUnK_RudwQUeU6HkmKZLVtL9" },
    { id: 39, name: "Mofongo", category: "Fritos", price: 280, ingredients: ["Plátanos verdes", "carne", "caldo"], image: "https://lh3.googleusercontent.com/d/1EeEJEW1AkVZ3lF5XNwv_AYjoE7_ku9kj" },
    { id: 40, name: "Mofongo Combi", category: "Fritos", price: 320, ingredients: ["Plátanos verdes", "combinación de carnes"], image: "https://lh3.googleusercontent.com/d/1VbkmaOTcMAuLMH09hmNUwZ9DDS4g-R8r" },
    { id: 41, name: "Res Frita", category: "Fritos", price: 350, ingredients: ["Carne de res frita", "tajadas", "ensalada"], image: "https://lh3.googleusercontent.com/d/1inUCfc3ioYM9exVNTxTTl6lguHH3uphq" },
    { id: 42, name: "Cerdo Frito", category: "Fritos", price: 320, ingredients: ["Cerdo frito", "tajadas", "ensalada"], image: "https://lh3.googleusercontent.com/d/1SmYMW3_b54PoS3mK76yMWVcl5MziKAEI" },
    { id: 43, name: "Longaniza", category: "Fritos", price: 280, ingredients: ["Longaniza dominicana", "tajadas"], image: "https://lh3.googleusercontent.com/d/1N8dfPXAOCDgj6EELcqCEXfpThqzxe89U" },
    { id: 44, name: "Fritura Combi", category: "Fritos", price: 380, ingredients: ["Combinación de carnes fritas"], image: "https://lh3.googleusercontent.com/d/1iYRUh_GyO4zLFAzfmE3VCthts4RKaT4B" },
    { id: 45, name: "Chichapollito", category: "Fritos", price: 260, ingredients: ["Pollo frito", "chicharrón"], image: "https://lh3.googleusercontent.com/d/12xDZJ8zbkXyyrRtgJeYcFgWiWa5fMs4K" },

    // 🍔 Sandwiches & Parrilladas
    { id: 46, name: "Club", category: "Sandwiches", price: 320, ingredients: ["Pan tostado", "pollo", "tocino", "lechuga", "tomate"], image: "https://lh3.googleusercontent.com/d/17Ar0dkrvmL5Buf4t4tKiP8QBTmBzoJkO" },
    { id: 47, name: "Hamburger", category: "Sandwiches", price: 280, ingredients: ["Carne de res", "queso", "lechuga", "tomate", "pan artesanal"], image: "https://lh3.googleusercontent.com/d/1BKlZSGKLPuVIC8SLlVemFVZJlgQzpppX" },
    { id: 48, name: "Pollo", category: "Sandwiches", price: 260, ingredients: ["Pechuga de pollo", "lechuga", "tomate", "mayonesa"], image: "https://lh3.googleusercontent.com/d/1kf61-q265GuddM_rCLt-sMWQmDYjuGgj" },
    { id: 49, name: "Solomo", category: "Sandwiches", price: 380, ingredients: ["Solomillo de res", "queso", "cebolla caramelizada"], image: "https://lh3.googleusercontent.com/d/1LXClP5gStXuz5xXWSfQ5lGLOq2CGfKkG" },
    { id: 50, name: "Filete de Res", category: "Sandwiches", price: 420, ingredients: ["Filete de res", "hongos", "cebolla", "mostaza"], image: "https://lh3.googleusercontent.com/d/11jYO1uPJ4x0OsRuHXoN4Pl68dbcTa7oD" },
    { id: 51, name: "Parrillada Adrián", category: "Sandwiches", price: 450, ingredients: ["Selección de carnes a la parrilla"], image: "https://lh3.googleusercontent.com/d/1ZiOVB54FZ1ER22Jjie1vTSYrGyRtG2Qk" },

    // 🍗 Carnes Asadas / Grill
    { id: 52, name: "Pollo", category: "Carnes Asadas", price: 400, ingredients: ["Pollo entero", "adobo tropical", "guarnición"], image: "https://lh3.googleusercontent.com/d/1osLHPqkNpwudQUV9KX_4ZTk3C0PaVq6m" },
    { id: 53, name: "Chuletas de Cerdo", category: "Carnes Asadas", price: 380, ingredients: ["Chuletas de cerdo", "salsa especial"], image: "https://lh3.googleusercontent.com/d/1HGwCNwgaUds0fCqP-gWN-aLUjfa-5P0D" },
    { id: 54, name: "Pechuga a la Cordon Bleu", category: "Carnes Asadas", price: 420, ingredients: ["Pechuga de pollo", "jamón", "queso", "pan rallado"], image: "https://lh3.googleusercontent.com/d/1T34ctBYUrdTCGpSzk9eEgevg7H2ueSEW" },
    { id: 55, name: "Pechuga de Pollo", category: "Carnes Asadas", price: 350, ingredients: ["Pechuga de pollo a la parrilla"], image: "https://lh3.googleusercontent.com/d/1T34ctBYUrdTCGpSzk9eEgevg7H2ueSEW" },
    { id: 56, name: "Filetillo de Cerdo", category: "Carnes Asadas", price: 400, ingredients: ["Filete de cerdo tierno"], image: "https://lh3.googleusercontent.com/d/1u9IJJQt3vCRIhwdSQ3uF26Sr8d1FL1Di" },
    { id: 57, name: "Costillas de Cerdo", category: "Carnes Asadas", price: 480, ingredients: ["Costillas BBQ", "salsa ahumada"], image: "https://lh3.googleusercontent.com/d/1u9IJJQt3vCRIhwdSQ3uF26Sr8d1FL1Di" },

    // 🍛 Criollos y Arroces
    { id: 58, name: "Asopao de Pollo", category: "Criollos", price: 280, ingredients: ["Arroz", "pollo", "verduras", "caldo"], image: "https://lh3.googleusercontent.com/d/14i4IeMh142uLJfgb0PMF23HIuvpMtims" },
    { id: 59, name: "Arroz con Pollo", category: "Criollos", price: 260, ingredients: ["Arroz dorado", "pollo", "habichuelas rojas"], image: "https://lh3.googleusercontent.com/d/1XPnqXuUFROL7OO2bzHzqe5o6a9gtuuhJ" },
    { id: 60, name: "Bacalao", category: "Criollos", price: 320, ingredients: ["Bacalao desalado", "ñames", "pimientos"], image: "https://lh3.googleusercontent.com/d/1qv4dnVOeGwZmAOHgvQvIteV7x7Ziwy-g" },
    { id: 61, name: "Arenque", category: "Criollos", price: 300, ingredients: ["Arenque en escabeche", "plátano", "cebolla"], image: "https://lh3.googleusercontent.com/d/19l-eoGqeF2tqSUo4SOvzljwZbSO_M6Q4" },
    { id: 62, name: "Chivo Guisado", category: "Criollos", price: 420, ingredients: ["Cabrito guisado", "verduras", "especias"], image: "https://lh3.googleusercontent.com/d/1-OXs03PUQXIyCRgDWdPJQEazIqXcCRp-" },
    { id: 63, name: "Chowfan", category: "Criollos", price: 350, ingredients: ["Arroz frito", "verduras", "carne/pollo"], image: "https://lh3.googleusercontent.com/d/1t5P8L-SycX0Uaw8igEasCXOy0MA_4bT5" },
    { id: 64, name: "Bistec de Filete", category: "Criollos", price: 450, ingredients: ["Filete de res", "cebollas", "pimientos"], image: "https://lh3.googleusercontent.com/d/17TF-iKZNj0e_JoROEhOQaEzER-A-td5R" },

    // 🥗 Ensaladas
    { id: 65, name: "Constanza", category: "Ensaladas", price: 220, ingredients: ["Lechuga", "tomate", "cebolla", "atún", "huevo"], image: "hhttps://lh3.googleusercontent.com/d/" },
    { id: 66, name: "Frutas", category: "Ensaladas", price: 250, ingredients: ["Frutas tropicales", "lechuga", "queso fresco"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 67, name: "San Juan", category: "Ensaladas", price: 240, ingredients: ["Mix de hojas", "frutos secos", "vinagreta especial"], image: "https://lh3.googleusercontent.com/d/" },

    // 🍝 Pastas
    { id: 68, name: "Espaguetis al Gusto", category: "Pastas", price: 280, ingredients: ["Espaguetis", "salsa de tomate", "carne molida"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 69, name: "Espaguetis con Mariscos", category: "Pastas", price: 320, ingredients: ["Espaguetis", "mariscos", "salsa blanca"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 70, name: "Canelones Rellenos", category: "Pastas", price: 350, ingredients: ["Canelones", "carne molida", "bechamel", "queso"], image: "https://lh3.googleusercontent.com/d/" },

    // 🦐 Rincón Marino (Mariscos & Pescados)
    { id: 71, name: "Camarofongo", category: "Rincón Marino", price: 480, ingredients: ["Camarones", "mofongo", "salsa de camarones"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 72, name: "Mini Camarofongo", category: "Rincón Marino", price: 320, ingredients: ["Porción menor de camarofongo"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 73, name: "Camarones al Ajillo", category: "Rincón Marino", price: 450, ingredients: ["Camarones al ajillo", "salsa tropical"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 74, name: "Pescado Boca Chica", category: "Rincón Marino", price: 520, ingredients: ["Pescado fresco Boca Chica", "limón", "especias"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 75, name: "Pescado Samaná", category: "Rincón Marino", price: 550, ingredients: ["Pescado Samaná", "mojo criollo", "tajadas"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 76, name: "Espaguetis Rincón Marino", category: "Rincón Marino", price: 380, ingredients: ["Espaguetis con mariscos", "salsa marinera"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 77, name: "Espaguetis con Camarones", category: "Rincón Marino", price: 420, ingredients: ["Espaguetis", "camarones", "salsa de ajo"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 78, name: "Arroz con Camarones", category: "Rincón Marino", price: 400, ingredients: ["Arroz", "camarones", "salsa especial"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 79, name: "Asopao de Camarones", category: "Rincón Marino", price: 450, ingredients: ["Arroz", "camarones", "caldo de mariscos"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 80, name: "Arroz Rincón Marino", category: "Rincón Marino", price: 380, ingredients: ["Arroz con mariscos variados"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 81, name: "Salpicón de Mariscos", category: "Rincón Marino", price: 480, ingredients: ["Mezcla de mariscos", "salsa especial"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 82, name: "Filete de Pescado", category: "Rincón Marino", price: 420, ingredients: ["Filete de pescado fresco", "preparaciones variadas"], image: "https://lh3.googleusercontent.com/d/" },

    // 🍰 Postres
    { id: 83, name: "Pudin de Pan", category: "Postres", price: 150, ingredients: ["Pan viejo", "leche", "huevos", "azúcar"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 84, name: "Coco al Horno", category: "Postres", price: 180, ingredients: ["Coco rallado", "azúcar", "leche condensada"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 85, name: "Flan de Leche", category: "Postres", price: 160, ingredients: ["Leche", "huevos", "caramelo"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 86, name: "Ensalada de Frutas", category: "Postres", price: 140, ingredients: ["Frutas de temporada", "leche condensada"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 87, name: "Sorbete", category: "Postres", price: 120, ingredients: ["Frutas naturales", "hielo"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 88, name: "Leche Cortada", category: "Postres", price: 130, ingredients: ["Leche", "limón", "canela"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 89, name: "Frutas en Almíbar", category: "Postres", price: 170, ingredients: ["Frutas confitadas", "almíbar"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 90, name: "Tres Leches", category: "Postres", price: 190, ingredients: ["Bizcocho", "tres tipos de leche", "merengue"], image: "https://lh3.googleusercontent.com/d/" },
    { id: 91, name: "Majarete", category: "Postres", price: 150, ingredients: ["Maíz", "leche", "canela", "pasas"], image: "https://lh3.googleusercontent.com/d/" }
];

// State variables
let currentPage = 1;
const itemsPerPage = 8;
let filteredProducts = [...menuData];
let currentCategory = 'all';

// DOM Elements
const productsContainer = document.getElementById('productsContainer');
const categoryFilters = document.getElementById('categoryFilters');
const pagination = document.getElementById('pagination');
const resultCount = document.getElementById('resultCount');
const sortBy = document.getElementById('sortBy');
const backToTop = document.getElementById('backToTop');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generateCategoryFilters();
    renderProducts();
    setupEventListeners();
});

// Generate category filter buttons
function generateCategoryFilters() {
    const categories = ['all', ...new Set(menuData.map(item => item.category))];
    
    categoryFilters.innerHTML = `
        <button class="btn btn-outline-primary filter-btn ${currentCategory === 'all' ? 'active' : ''}" 
                data-category="all">Todos</button>
        ${categories.filter(cat => cat !== 'all').map(category => {
            return `<button class="btn btn-outline-primary filter-btn ${currentCategory === category ? 'active' : ''}" 
                    data-category="${category}">${category}</button>`;
        }).join('')}
    `;
}


// Render products with pagination
function renderProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Group products into rows of 4 with 3px spacing
    let rowsHTML = '';
    for (let i = 0; i < productsToShow.length; i += 4) {
        const rowProducts = productsToShow.slice(i, i + 4);
        rowsHTML += `
            <div class="row gx-1 gy-1 mb-1">
                ${rowProducts.map(product => `
                    <div class="col-md-6 col-lg-3">
                        <div class="card product-card h-100">
                            <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text flex-grow-1">
                                    <small class="text-muted">Ingredientes:</small><br>
                                    ${product.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
                                </p>
                                <div class="mt-auto">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="h5 text-primary mb-0">RD$${product.price}</span>
                                        <button class="btn btn-success btn-sm" onclick="addToCart(${product.id})">
                                            <i class="fas fa-plus"></i> Agregar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    productsContainer.innerHTML = rowsHTML;
    
    renderPagination();
    updateResultCount();
}

// Render pagination controls
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Anterior</a>
        </li>
    `;
    
    // Page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }
    
    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Siguiente</a>
        </li>
    `;
    
    pagination.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Filter products by category
function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;
    
    if (category === 'all') {
        filteredProducts = [...menuData];
    } else {
        filteredProducts = menuData.filter(item => item.category === category);
    }
    
    // Apply sorting
    applySorting();
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    renderProducts();
}

// Apply sorting
function applySorting() {
    const sortValue = sortBy.value;
    
    if (sortValue === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'category') {
        filteredProducts.sort((a, b) => {
            if (a.category === b.category) {
                return a.name.localeCompare(b.name);
            }
            return a.category.localeCompare(b.category);
        });
    }
}

// Update result count
function updateResultCount() {
    const total = filteredProducts.length;
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, total);
    
    if (currentCategory === 'all') {
        resultCount.textContent = `Mostrando ${start}-${end} de ${total} productos`;
    } else {
        resultCount.textContent = `Mostrando ${start}-${end} de ${total} productos en ${currentCategory}`;
    }
}

// Add to cart function (placeholder)
function addToCart(productId) {
    const product = menuData.find(p => p.id === productId);
    showBootstrapModal('Producto Agregado', `¡${product.name} agregado al carrito!`);
    // Here you would integrate with actual cart functionality
}

// Show coming soon alert for login button
function showComingSoonAlert() {
    showCustomAlert('Iniciar Sesión', 'Esta función estará disponible próximamente.', 'Entendido');
}


// Show coming soon alert for login button
function showComingSoonAlert() {
    showBootstrapModal('Iniciar Sesión', 'Esta función estará disponible próximamente.');
}

// Setup event listeners
function setupEventListeners() {
    // Login button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', showComingSoonAlert);
    }
    
    // Category filter buttons
    categoryFilters.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            const category = e.target.getAttribute('data-category');
            filterByCategory(category);
        }
    });
    
    // Sort dropdown
    sortBy.addEventListener('change', function() {
        applySorting();
        renderProducts();
    });
    
    // Back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}