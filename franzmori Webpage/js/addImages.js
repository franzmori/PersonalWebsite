const rootPath = 'img';

const fileDictionary = {'Ballerinas/Images': ['19.05.23 - Tututuesday - Lucia Lacarra.jpg', '19.03.12 - Tututuesday - Alicia.jpg', '19.03.08 - Tututuesday - Misty.jpg',
'19.02.19 - Tututuesday - svetlana.jpg', '19.02.12 - Tututuesday balloons.jpg', '19.02.05 - Tututuesday - Gioh.jpg', '19.01.29 - Tututuesday - Sonoya.jpg', '19.01.22 - Tututuesday - Nayara.jpg', '18.12.10 - Tututuesday - Ariana.jpg', '18.11.27 - Tututuesday - Sweat2.jpg', '18.11.20 - Tututuesday - bowling.jpg', '18.11.14 - Tututuesday - Yohana.jpg', '18.10.31 - Carmen Alvarado.jpg', '18.10.11 - Isobel Rose Lehman.jpg', '18.04.29 - Tututuesday.jpg', '17.11.14 - Tututuesday.jpg', '17.08.28 - Tututuesday.jpg', '17.08.22 - Tututuesday.jpg', '17.08.01 - Tututuesday.jpg', '17.07.25 - Tututuesday.jpg'], 'Ballerinas/Thumbnails': ['19.05.23 - Tututuesday - Lucia Lacarra - Thumb.jpg', '19.03.12 - Tututuesday - Alicia - Thumb.jpg', '19.03.08 - Tututuesday - Misty - Thumb.jpg', '19.02.19 - Tututuesday - svetlana - Thumb.jpg', '19.02.12 - Tututuesday balloons - Thumb.jpg', '19.02.05 - Tututuesday - Gioh - Thumb.jpg', '19.01.29 - Tututuesday - Sonoya - Thumb.jpg', '19.01.22 - Tututuesday - Nayara - Thumb.jpg', '18.12.10 - Tututuesday - Ariana - Thumb.jpg', '18.11.27 - Tututuesday - Sweat2 - Thumb.jpg', '18.11.20 - Tututuesday - bowling - Thumb.jpg', '18.11.14 - Tututuesday - Yohana - Thumb.jpg', '18.10.31 - Carmen Alvarado - Thumb.jpg', '18.10.11 - Isobel Rose Lehman - Thumb.jpg', '18.04.29 - Tututuesday - Thumb.jpg', '17.11.14 - Tututuesday - Thumb.jpg', '17.08.28 - Tututuesday - Thumb.jpg', '17.08.22 - Tututuesday - Thumb.jpg', '17.08.01 - Tututuesday - Thumb.jpg', '17.07.25 - Tututuesday - Thumb.jpg'], 'Blackwork/Images': ['19.03.29 - Roots.jpg', '19.03.18 - Giving life.jpg', '19.02.20 - Cat Love.jpg', '19.02.14 - Valentines.jpg', '19.02.11 - Smoke.jpg', '19.01.31 - Poppy  Eye.jpg', '19.01.30 - Allison Stroming.jpg', '19.01.20 - Bulblight head.jpg', '19.01.19 - Death Kiss.jpg', '18.10.09 - Marcela Bovio.jpg', '18.10.08 - Esther Duflo.jpg', '18.10.07 - Grin Reaper.jpg', '18.09.20 - Hooked in your eyes.jpg', '18.07.16 - Sollefe.jpg', '18.05.01 - Scorpio.jpg', '17.12.30 - Virgo.jpg', '17.10.12 - Screech.jpg', '17.10.09 - Shy.jpg', '17.09.08 - Leopard.jpg', '17.01.02 - Capricorn.jpg'], 'Blackwork/Thumbnails': ['19.03.29 - Roots - Thumb.jpg', '19.03.18 - Giving life - Thumb.jpg', '19.02.20 - Cat Love - Thumb.jpg', '19.02.14 - Valentines - Thumb.jpg', '19.02.11 - Smoke - Thumb.jpg', '19.01.31 - Poppy  Eye - Thumb.jpg', '19.01.30 - Allison Stroming - Thumb.jpg', '19.01.20 - Bulblight head - Thumb.jpg', '19.01.19 - Death Kiss - Thumb.jpg', '18.10.09 - Marcela Bovio - Thumb.jpg', '18.10.08 - Esther Duflo - Thumb.jpg', '18.10.07 - Grin Reaper - Thumb.jpg', '18.09.20 - Hooked in your eyes - Thumb.jpg', '18.07.16 - Sollefe - Thumb.jpg', '18.05.01 - Scorpio - Thumb.jpg', '17.12.30 - Virgo - Thumb.jpg', '17.10.12 - Screech - Thumb.jpg', '17.10.09 - Shy - Thumb.jpg', '17.09.08 - Leopard - Thumb.jpg', '17.01.02 - Capricorn - Thumb.jpg'], 'Digital Media/Images': ['19.05.12 - Dissociation.jpg', '18.07.18 - Makoto Persona.jpg', '17.03.27 - Jessica Rabbit.jpg', '16.07.20 - Branches.jpg', '14.12.22 - xmas.jpg', '14.11.09 - Lust FMA.jpg', '14.09.29 - Lola Final.jpg', '14.04.15 - Panda Delgado.jpg', '14.03.20 - Vampirella.jpg', '14.03.17 - baron samedi.jpg'], 'Digital Media/Thumbnails': ['19.05.12 - Dissociation - Thumb.jpg', '18.07.18 - Makoto Persona - Thumb.jpg', '17.03.27 - Jessica Rabbit - Thumb.jpg', '16.07.20 - Branches - Thumb.jpg', '14.12.22 - xmas - Thumb.jpg', '14.11.09 - Lust FMA - Thumb.jpg', '14.09.29 - Lola Final - Thumb.jpg', '14.04.15 - Panda Delgado - Thumb.jpg', '14.03.20 - Vampirella - Thumb.jpg', '14.03.17 - baron samedi - Thumb.jpg'], 'Graphic Design/Images': ['19.01.15 - Full Circle Cover - CD.jpg', '18.12.03 - ProteinBar 01.jpg', '18.11.13 - Basement Tryptic.jpg', '18.06.24 - El Milagro Afro-Antillano - CD.jpg', '17.12.30 - ExplodingGranada - CD.jpg', '14.10.08 - En tu Universo - CD.jpg'], 'Graphic Design/Thumbnails': ['19.01.15 - Full Circle Cover - CD - Thumb.jpg', '18.12.03 - ProteinBar 01 - Thumb.jpg', '18.11.13 - Basement Tryptic cover - Thumb.jpg', '18.06.24 - El Milagro Afro-Antillano - CD - Thumb.jpg', '17.12.30 - ExplodingGranada - CD - Thumb.jpg', '14.10.08 - En tu Universo - CD - Thumb.jpg'], 'Tututuesday': ['18.11.27 - Tututuesday - Sweat2.jpg', '18.11.20 - Tututuesday - bowling.jpg', '18.11.14 - Tututuesday - Yohana.jpg', '18.04.29 - Tututuesday.jpg', '17.11.28 - Tututuesday.jpg', '17.11.14 - Tututuesday.jpg', '17.08.28 - Tututuesday.jpg', '17.08.22 - Tututuesday.jpg', '17.08.15 - Tututuesday.jpg', '17.08.01 - Tututuesday.jpg', '17.07.25 - Tututuesday.jpg', '15.12.05 - Tututuesday.jpg'], 'Watercolor/Images': ['19.04.30 - Pink Robin.jpg', '19.04.29 - Cherry skulls.jpg', '18.11.18 - Morrigan-square.jpg', '18.11.14 - Nicola.jpg', '18.09.02 - cirque du kc.jpg', '18.08.26 - Judhawks.jpg', '18.06.24 - El Milagro Afro-Antillano.jpg', '18.01.28 - Rolo.jpg',
'18.01.28 - Rafito.jpg', '18.01.28 - Franly.jpg', '18.01.27 - Tony.jpg', '17.12.30 - ExplodingGranada.jpg', '17.12.18 - Richi.jpg', '15.10.07 - Sagrado de Birmania.jpg'], 'Watercolor/Thumbnails': ['19.04.30 - Pink Robin - Thumb.jpg', '19.04.29 - Cherry skulls - Thumb.jpg', '18.11.18 - Morrigan-square - Thumb.jpg', '18.11.14 - Nicola - Thumb.jpg', '18.09.02 - cirque du kc - Thumb.jpg', '18.08.26 - Judhawks - Thumb.jpg', '18.06.24 - El Milagro Afro-Antillano - Thumb.jpg', '18.01.28 - Rolo - Thumb.jpg', '18.01.28 - Rafito - Thumb.jpg', '18.01.28 - Franly - Thumb.jpg', '18.01.27 - Tony - Thumb.jpg', '17.12.30 - ExplodingGranada - Thumb.jpg', '17.12.18 - Richi - Thumb.jpg', '15.10.07 - Sagrado de Birmania - Thumb.jpg']};

// const fileDictionary = {'Blackwork/Images': ['18.10.30 - Asuncion Macian Ruiz.jpg', '18.10.29 - Gillian Flynn.jpg', '18.10.28 - Edith Lebeau.jpg', '18.10.23 - Tatiana Bilbao.jpg', '18.10.22 - Nightmare Demonsion.jpg', '18.10.17 - Sewn Shut - Square.jpg', '18.10.11 - Migraine.jpg', '18.10.11 - Isobel Rose Lehman.jpg', '18.10.09 - Marcela Bovio.jpg', '18.10.08 -Esther Duflo.jpg', '18.10.07 - Grin Reaper.jpg', '18.10.05 - Blood Sucker.jpg', '18.10.03 -_Night Owl.jpg', '18.10.02 - Waris Dirie.jpg', '18.10.01 -Medicine.jpg', '18.10.01 - Pumpkin Head.jpg', '18.09.20 - Hooked in your eyes.jpg', '18.07.16 - Sollefe.jpg', '18.05.27 - Lupus.jpg', '18.05.25 - Rose.jpg', '18.05.01 - Scorpio.jpg', '18.04.07 - Camaleon BW.jpg', '18.04.01 - Easter Bunny.jpg', '18.03.17 - Vacio.jpg', '18.03.04 - CondenadoAPendular2.jpg', '17.12.30 - Virgo.jpg', '17.10.24 - Fierce.jpg', '17.10.15 - Run.jpg', '17.10.12 - Screech.jpg', '17.10.09 - Shy.jpg', '17.10.08 - Long.jpg', '17.10.04 - Underwater.jpg', '17.10.01 - Swift.jpg', '17.09.08 - Leopard.jpg', '17.08.27 - Dart frog 01.jpg', '17.08.12 - Leo.jpg', '17.04.01 - Sushi.jpg', '17.02.08 - Aquarius 02.jpg', '17.01.02 - Capricorn.jpg', '16.10.28 - Lapras INK.jpg', '16.10.24 - Entei INK.jpg'], 'Blackwork/Original': ['31_Carmen Alvarado.jpg', '30_Asuncion Macian Ruiz.jpg', '29_Gillian Flynn.jpg', '28_Edith Lebeau.jpg', '24_Entei INK.jpg', '23_Tatiana Bilbao .jpg', '23_Lapras INK.jpg', '22_Nightmare Demonsion.jpg', '18.10.11 - Migraine.jpg', '18.09.20 - Hooked in your eyes.jpg', '18.07.16 - Sollefe.jpg', '18.05.27 - Lupus.jpg', '18.05.25 - Rose.jpg', '18.04.07 - Camaleon BW.jpg', '18.04.01 - Easter Bunny.jpg', '18.03.17 - Vacio.jpg', '18.03.04 - CondenadoAPendular2.jpg', '18.02.04 - TorresdelPaine.jpg', '17.09.08 - Leopard.jpg', '17.08.27 - Dart frog 01.jpg', '17.04.01 - Sushi.jpg', '16_Sewn Shut - Square.jpg', '11_Isobel Rose Lehman.jpg', '09_Marcela Bovio.jpg', '08_Esther Duflo.jpg', '07_Grin Reaper.jpg', '05_Blood Sucker.jpg', '03_Night Owl.jpg', '02_Waris Dirie.jpg', '01_Pumpkin Head.jpg', '01_Medicine.jpg'], 'Blackwork/Thumbnails': ['18.10.30 - Asuncion Macian Ruiz - Thumb.jpg', '18.10.29 - Gillian Flynn - Thumb.jpg', '18.10.28 - Edith Lebeau - Thumb.jpg', '18.10.23 - Tatiana Bilbao - Thumb.jpg', '18.10.22 - Nightmare Demonsion - Thumb.jpg', '18.10.17 - Sewn Shut - Square - Thumb.jpg', '18.10.11 - Migraine - Thumb.jpg', '18.10.11 - Isobel Rose Lehman - Thumb.jpg', '18.10.09 - Marcela Bovio - Thumb.jpg', '18.10.08 -Esther Duflo - Thumb.jpg', '18.10.07 - Grin Reaper - Thumb.jpg', '18.10.05 - Blood Sucker - Thumb.jpg', '18.10.03 -_Night Owl - Thumb.jpg', '18.10.02 - Waris Dirie - Thumb.jpg', '18.10.01 -Medicine - Thumb.jpg', '18.10.01 - Pumpkin Head - Thumb.jpg', '18.09.20 - Hooked in your eyes - Thumb.jpg', '18.07.16 - Sollefe - Thumb.jpg', '18.05.27 - Lupus - Thumb.jpg', '18.05.25 - Rose - Thumb.jpg', '18.05.01 - Scorpio - Thumb.jpg', '18.04.07 - Camaleon BW - Thumb.jpg', '18.04.01 - Easter Bunny - Thumb.jpg', '18.03.17 - Vacio - Thumb.jpg', '18.03.04 - CondenadoAPendular2 - Thumb.jpg', '17.12.30 - Virgo - Thumb.jpg', '17.10.24 - Fierce - Thumb.jpg', '17.10.15 - Run - Thumb.jpg', '17.10.12 - Screech - Thumb.jpg', '17.10.09 - Shy - Thumb.jpg', '17.10.08 - Long - Thumb.jpg', '17.10.04 - Underwater - Thumb.jpg', '17.10.01 - Swift - Thumb.jpg', '17.09.08 - Leopard - Thumb.jpg', '17.08.27 - Dart frog 01 - Thumb.jpg', '17.08.12 - Leo - Thumb.jpg', '17.04.01 - Sushi - Thumb.jpg', '17.02.08 - Aquarius 02 - Thumb.jpg', '17.01.02 - Capricorn - Thumb.jpg', '16.10.28 - Lapras INK - Thumb.jpg', '16.10.24 - Entei INK - Thumb.jpg'], 'Digital Media': ['xmas.jpg', 'baron samedi.jpg', 'Lust FMA.jpg', 'Lola Final.jpg', 'En tu Universo.jpg', '18.09.28 - Bowsette.jpg', '18.07.18 - Makoto Persona.jpg', '18.02.04.jpg', '17.05.01 - Motoko.jpg', '17.03.27 - Jessica Rabbit.jpg', '16.07.20 - Branches.jpg', '14.04.15 - Panda Delgado.jpg', '14.03.20 - Vampirella.jpg', '14.02.27 - BettyPage.jpg'], 'Graphic Design': ['PB - 03.jpg', 'PB - 02.jpg', 'PB - 01.jpg', 'Basement Tryptic 02.jpg', 'Basement Tryptic 01.jpg', 'Basement Tryptic 00 -  cover.jpg'], 'Tututuesday': ['18.11.27 - Tututuesday - Sweat2.jpg', '18.11.20 - Tututuesday - bowling.jpg', '18.11.14 - Tututuesday - Yohana.jpg', '18.10.31 - Carmen Alvarado.jpg', '18.04.29 - Tututuesday.jpg', '17.11.28 - Tututuesday.jpg', '17.11.14 - Tututuesday.jpg', '17.08.28 - Tututuesday.jpg', '17.08.22 - Tututuesday.jpg', '17.08.15 - Tututuesday.jpg', '17.08.01 - Tututuesday.jpg', '17.07.25 - Tututuesday.jpg', '15.12.05 - Tututuesday.jpg'], 'Watercolor': ['francis moricete (franzmori) - Morrigan.jpg', '18.11.27 - Tututuesday - Sweat2.jpg', '18.11.20 - Tututuesday - bowling.jpg', '18.11.14 - Tututuesday - Yohana.jpg', '18.11.14 - Nicola.jpg', '18.09.02 - cirque du kc.jpg', '18.08.26 - Judhawks.jpg', '18.06.24 - El Milagro Afro-Antillano.jpg', '18.04.29 - Tututuesday.jpg', '18.04.07 - Camaleon Color.jpg', '18.03.04 - CondenadoAPendular.jpg', '18.01.28 - Rolo.jpg', '18.01.28 - Rafito.jpg', '18.01.28 - Franly.jpg', '18.01.27 - Tony.jpg', '17.12.30 - ExplodingGranada.jpg', '17.12.18 - Richi.jpg', '15.10.07 - Sagrado de Birmania.jpg']};

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

    large_image.src = image.large_src;
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

    var thumbnails = fileDictionary[category_name + '/Thumbnails'];
    for(var filename of thumbnails)
    {
        var relativePath = rootPath + '/'+ category_name + '/Thumbnails/' + filename;

        var image = document.createElement('img');
        image.src = relativePath;
        image.large_src = rootPath + '/'+ category_name + '/Images/' + filename.replace(' - Thumb', '');
        image.onclick = function() {
            show_large_image(this);
        };
        imageGrid.appendChild(image);
    }

    show_large_image(imageGrid.firstChild);

    // if(category_name == 'Blackwork')
    // {
    //     var thumbnails = fileDictionary[category_name + '/Thumbnails'];
    //     for(var filename of thumbnails)
    //     {
    //         var relativePath = rootPath + '/'+ category_name + '/Thumbnails/' + filename;

    //         var image = document.createElement('img');
    //         image.src = relativePath;
    //         image.large_src = rootPath + '/'+ category_name + '/Images/' + filename.replace(' - Thumb', '');
    //         image.onclick = function() {
    //             show_large_image(this);
    //         };
    //         imageGrid.appendChild(image);
    //     }

    //     show_large_image(imageGrid.firstChild);
    // }
    // else
    // {
    //     var values = fileDictionary[category_name];
    //     for(var filename of values)
    //     {
    //         var relativePath = rootPath + '/'+ category_name + '/' + filename;
    
    //         var image = document.createElement('img');
    //         image.src = relativePath;
    //         image.large_src = relativePath;
    //         image.onclick = function() {
    //             show_large_image(this);
    //         };
    //         imageGrid.appendChild(image);
    //     }
    
    //     show_large_image(imageGrid.firstChild);
    // }
}

$(document).ready(function() 
{
    var blackworkCategory = document.getElementById('blackwork-category');

    if(blackworkCategory)
        show_image_category(blackworkCategory);
});