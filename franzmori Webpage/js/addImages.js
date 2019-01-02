const rootPath = 'img';

const fileDictionary = {'Blackwork': ['01_Medicine.jpg', '01_Pumpkin Head.jpg', '02_Waris Dirie.jpg', '03_Night Owl.jpg', '05_Blood Sucker.jpg', '07_Grin Reaper.jpg', '08_Esther Duflo.jpg', '09_Marcela Bovio.jpg', '11_Isobel Rose Lehman.jpg', '16_Sewn Shut - Square.jpg', '17.04.01 - Sushi.jpg', '17.08.27 - Dart frog 01.jpg', '17.09.08 - Leopard.jpg', '18.02.04 - TorresdelPaine.jpg', '18.03.04 - CondenadoAPendular2.jpg', '18.03.17 - Vacio.jpg', '18.04.01 - Easter Bunny.jpg', '18.04.07 - Camaleon BW.jpg', '18.05.25 - Rose.jpg', '18.05.27 - Lupus.jpg', '18.07.16 - Sollefe.jpg', '18.09.20 - Hooked in your eyes.jpg', '18.10.11 - Migraine.jpg', '22_Nightmare Demonsion.jpg', '23_Lapras INK.jpg', '23_Tatiana Bilbao .jpg', '24_Entei INK.jpg', '28_Edith Lebeau.jpg', '29_Gillian Flynn.jpg', '30_Asuncion Macian Ruiz.jpg', '31_Carmen Alvarado.jpg'], 'Digital Media': ['14.02.27 - BettyPage.jpg', '14.03.20 - Vampirella.jpg', '14.04.15 - Panda Delgado.jpg', '16.07.20 - Branches.jpg', '17.03.27 - Jessica Rabbit.jpg', '17.05.01 - Motoko.jpg', '18.02.04.jpg', '18.07.18 - Makoto Persona.jpg', '18.09.28 - Bowsette.jpg', 'baron samedi.jpg', 'En tu Universo.jpg', 'Lola Final.jpg', 'Lust FMA.jpg', 'xmas.jpg'],  'Tututuesday': ['15.12.05 - Tututuesday.jpg', '17.07.25 - Tututuesday.jpg', '17.08.01 - Tututuesday.jpg', '17.08.15 - Tututuesday.jpg', '17.08.22 - Tututuesday.jpg', '17.08.28 - Tututuesday.jpg', '17.11.14 - Tututuesday.jpg', '17.11.28 - Tututuesday.jpg', '18.04.29 - Tututuesday.jpg', '18.11.14 - Tututuesday - Yohana.jpg', '18.11.20 - Tututuesday - bowling.jpg', '18.11.27 - Tututuesday - Sweat2.jpg'], 'Watercolor': ['15.10.07 - Sagrado de Birmania.jpg', '17.12.18 - Richi.jpg', '17.12.30 - ExplodingGranada.jpg', '18.01.27 - Tony.jpg', '18.01.28 - Franly.jpg', '18.01.28 - Rafito.jpg', '18.01.28 - Rolo.jpg', '18.03.04 - CondenadoAPendular.jpg', '18.04.07 - Camaleon Color.jpg', '18.04.29 - Tututuesday.jpg', '18.06.24 - El Milagro Afro-Antillano.jpg', '18.08.26 - Judhawks.jpg', '18.09.02 - cirque du kc.jpg', '18.11.14 - Nicola.jpg', '18.11.14 - Tututuesday - Yohana.jpg', '18.11.20 - Tututuesday - bowling.jpg', '18.11.27 - Tututuesday - Sweat2.jpg', 'francis moricete (franzmori) - Morrigan.jpg']};

function load_images_to_grid()
{
    var files = [];

    var imageGrid = document.getElementById('illustration-image-grid');
    
    while (imageGrid.firstChild) {
        imageGrid.removeChild(imageGrid.firstChild);
    }
    
    for(var key in fileDictionary)
    {
        var value = fileDictionary[key];
        for(var filename of value)
        {
            var relativePath = rootPath + '/'+ key + '/' + filename;
            files.push(relativePath);
        }
    }

    var usedIndices = [];
    for(var i = 0; i < files.length; i++ )
    {
        var index = Math.floor(Math.random() * files.length);

        while(usedIndices.includes(index)){
            index = Math.floor(Math.random() * files.length);
        }

        var image = document.createElement('img');
        image.src = files[index];
        image.onclick = function() {
            show_large_image(this);
        };
        imageGrid.appendChild(image);

        if(i == 0)
            show_large_image(image);

        usedIndices.push(index);
    }
}

function show_large_image(image)
{
    var large_image = document.getElementById('illustration-image-large');

    large_image.src = image.src;
}

function show_image_category(category)
{
    var categories_elements = document.getElementById("illustration-header").getElementsByTagName("li");

    for(var category_element of categories_elements)
        category_element.classList.remove("highlight");

    category.classList.add("highlight");

    load_image_category(category.innerHTML);
}

function load_image_category(category_name)
{
    var imageGrid = document.getElementById('illustration-image-grid');
    
    $(imageGrid).scrollTop(0);

    while (imageGrid.firstChild) {
        imageGrid.removeChild(imageGrid.firstChild);
    }

    var values = fileDictionary[category_name];
    for(var filename of values)
    {
        var relativePath = rootPath + '/'+ category_name + '/' + filename;

        var image = document.createElement('img');
        image.src = relativePath;
        image.onclick = function() {
            show_large_image(this);
        };
        imageGrid.appendChild(image);
    }

    show_large_image(imageGrid.firstChild);
}

$(document).ready(function() 
{
    var blackworkCategory = document.getElementById('blackwork-category');

    if(blackworkCategory)
        show_image_category(blackworkCategory);
});