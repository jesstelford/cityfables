    //Organization of Menus:
    //Scene {
        //Menu-icon{}
        //Menu {
            //Option 1{}
            //Option2{}
            //Option3{}
            //Inner Menus {
                //Option1-1{}
                //Option1-2{}
                //Option1-3{}
                //Option2-1{}
                //Option2-2{}
                //Option2-3{}
                //Option3-1{}
                //Option3-2{}
                //Option3-3{}
            //}
        //}
    //}
    var mainMenuOpen;
    var firstMenuOpen;
    var secondMenuOpen;
    var thirdMenuOpen;
    var imgOneDisplay;
    var fulScreen;
    function start() {
        //specifies menu's are closed at start
        mainMenuOpen = false;
        firstMenuOpen = false;
        secondMenuOpen = false;
        thirdMenuOpen = false;
        fullScreen = false;

        //Creates Menu Icon
        var element = document.getElementById("scene");
        var menuicon = document.createElement("a-entity");
        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var rotation = document.createAttribute("rotation");
        var position = document.createAttribute("position");
        id.value = "menu-icon";
        geometry.value = "primitive: circle; radius: 8";
        material.value = "color: #808080; opacity: 0.50";
        rotation.value = "-90 0 0";
        position.value = "0 -30 3";
        menuicon.setAttributeNode(id);
        menuicon.setAttributeNode(geometry);
        menuicon.setAttributeNode(material);
        menuicon.setAttributeNode(rotation);
        menuicon.setAttributeNode(position);

        var colorAnim = document.createElement("a-animation");
        var attribute = document.createAttribute("attribute");
        var to = document.createAttribute("to");
        var begin = document.createAttribute("begin");
        var duration = document.createAttribute("duration");
        attribute.value = "material.color";
        to.value = "#6B6B6B";
        begin.value = "anim";
        duration.value = "500";
        colorAnim.setAttributeNode(attribute);
        colorAnim.setAttributeNode(to);
        colorAnim.setAttributeNode(begin);
        colorAnim.setAttributeNode(duration);
        menuicon.appendChild(colorAnim);


        element.appendChild(menuicon);
        //creates event for clicking main menu button
        var mainMenuIcon = document.getElementById("menu-icon");
        mainMenuIcon.addEventListener("click", handleMainMenuClick);
        setInterval(function() {
            document.querySelector('#menu-icon').emit('anim');
        }, 500);
 
    }
    function handleFirstImageOptionClick() {
        closeMainMenu();
        createCloseMainMenuIcon();
        mainMenuOpen = true;
        firstMenuOpen = false;
        secondMenuOpen = false;
        thirdMenuOpen = false;
        openImgOne();
    }
    function handleSecondImageOptionClick() {
        closeMainMenu();
        createCloseMainMenuIcon();
        mainMenuOpen = true;
        firstMenuOpen = false;
        secondMenuOpen = false;
        thirdMenuOpen = false;
        openImgTwo();
    }
    function handleThirdImageOptionClick() {
        closeMainMenu();
        createCloseMainMenuIcon();
        mainMenuOpen = true;
        firstMenuOpen = false;
        secondMenuOpen = false;
        thirdMenuOpen = false;
        openImgThree();
    }
    function handleMainMenuClick() {
        if (fulScreen) {
            exitFullScreenMode();
        } else if (mainMenuOpen) {
            closeMainMenu();
            createOpenMainMenuIcon();
            mainMenuOpen = false;
            firstMenuOpen = false;
            secondMenuOpen = false;
            thirdMenuOpen = false;
        } else {
            openMainMenu();
            createCloseMainMenuIcon();
            mainMenuOpen = true;
        }
    }
    function createOpenMainMenuIcon() {
        var element = document.getElementById("scene");
        var menuicon = document.createElement("a-entity");
        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var rotation = document.createAttribute("rotation");
        var position = document.createAttribute("position");
        id.value = "menu-icon";
        geometry.value = "primitive: circle; radius: 8";
        material.value = "color: #808080; opacity: 0.50";
        rotation.value = "-90 0 0";
        position.value = "0 -30 3";
        menuicon.setAttributeNode(id);
        menuicon.setAttributeNode(geometry);
        menuicon.setAttributeNode(material);
        menuicon.setAttributeNode(rotation);
        menuicon.setAttributeNode(position);
        element.appendChild(menuicon);
        var menuicon = document.getElementById("menu-icon");
        menuicon.addEventListener("click", handleMainMenuClick);
    }
    function createCloseMainMenuIcon(){
        var element = document.getElementById("scene");
        var menuicon = document.createElement("a-entity");
        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var rotation = document.createAttribute("rotation");
        var position = document.createAttribute("position");
        id.value = "menu-icon";
        geometry.value = "primitive: circle; radius: 8";
        material.value = "color: #DBDBDB";
        rotation.value = "-90 0 0";
        position.value = "0 -30 3";
        menuicon.setAttributeNode(id);
        menuicon.setAttributeNode(geometry);
        menuicon.setAttributeNode(material);
        menuicon.setAttributeNode(rotation);
        menuicon.setAttributeNode(position);
        element.appendChild(menuicon);
        var menuicon = document.getElementById("menu-icon");
        menuicon.addEventListener("click", handleMainMenuClick);
    }
    function openImgOne() {
        var element = document.getElementById("scene");
        var menu = document.createElement("a-entity");
        var id = document.createAttribute("id");
        id.value = "Menu";
        menu.setAttributeNode(id);

        var smallPic = document.createElement("a-entity");

        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var position = document.createAttribute("position");

        id.value = "smallPic";
        geometry.value = "primitive: plane; height: 1; width: 1";
        material.value = "src: #farihatten; opacity: 0.25";
        position.value = "0 0 -5";

        smallPic.setAttributeNode(id);
        smallPic.setAttributeNode(geometry);
        smallPic.setAttributeNode(material);
        smallPic.setAttributeNode(position);

        menu.appendChild(smallPic);
        element.appendChild(menu);
        var smallPic = document.getElementById("smallPic");
        smallPic.addEventListener("click", createFullScreenOne);
    }
    function openImgTwo() {
        var element = document.getElementById("scene");
        var menu = document.createElement("a-entity");
        var id = document.createAttribute("id");
        id.value = "Menu";
        menu.setAttributeNode(id);

        var smallPic = document.createElement("a-entity");

        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var position = document.createAttribute("position");

        id.value = "smallPic";
        geometry.value = "primitive: plane; height: 1; width: 1";
        material.value = "src: #pic2; opacity: 0.25";
        position.value = "0 0 -5";

        smallPic.setAttributeNode(id);
        smallPic.setAttributeNode(geometry);
        smallPic.setAttributeNode(material);
        smallPic.setAttributeNode(position);

        menu.appendChild(smallPic);
        element.appendChild(menu);
        var smallPic = document.getElementById("smallPic");
        smallPic.addEventListener("click", createFullScreenTwo);
    }
    function openImgThree() {
        var element = document.getElementById("scene");
        var menu = document.createElement("a-entity");
        var id = document.createAttribute("id");
        id.value = "Menu";
        menu.setAttributeNode(id);

        var smallPic = document.createElement("a-entity");

        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var position = document.createAttribute("position");

        id.value = "smallPic";
        geometry.value = "primitive: plane; height: 1; width: 1";
        material.value = "src: #zadig; opacity: 0.25";
        position.value = "0 0 -5";

        smallPic.setAttributeNode(id);
        smallPic.setAttributeNode(geometry);
        smallPic.setAttributeNode(material);
        smallPic.setAttributeNode(position);

        menu.appendChild(smallPic);
        element.appendChild(menu);
        var smallPic = document.getElementById("smallPic");
        smallPic.addEventListener("click", createFullScreenThree);
    }
    function createFullScreenOne() {
        fulScreen = true;
        var element = document.getElementById("scene");
        var menu = document.getElementById("Menu");
        element.removeChild(menu);
        var element = document.getElementById("camera");
        var id = document.createAttribute("id");
        id.value = "Menu";
        menu.setAttributeNode(id);

        var fullPic = document.createElement("a-entity");

        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var position = document.createAttribute("position");

        id.value = "fullPic";
        geometry.value = "primitive: plane; height: 0.7; width: 1";
        material.value = "src: #farihatten";
        position.value = "0 0 -1";

        fullPic.setAttributeNode(id);
        fullPic.setAttributeNode(geometry);
        fullPic.setAttributeNode(material);
        fullPic.setAttributeNode(position);
        element.appendChild(fullPic);
    }
    function createFullScreenTwo() {
        fulScreen = true;
        var element = document.getElementById("scene");
        var menu = document.getElementById("Menu");
        element.removeChild(menu);
        var element = document.getElementById("camera");
        var id = document.createAttribute("id");
        id.value = "Menu";
        menu.setAttributeNode(id);

        var fullPic = document.createElement("a-entity");

        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var position = document.createAttribute("position");

        id.value = "fullPic";
        geometry.value = "primitive: plane; height: 0.7; width: 1";
        material.value = "src: #pic2";
        position.value = "0 0 -1";

        fullPic.setAttributeNode(id);
        fullPic.setAttributeNode(geometry);
        fullPic.setAttributeNode(material);
        fullPic.setAttributeNode(position);
        element.appendChild(fullPic);
    }
    function createFullScreenThree() {
        fulScreen = true;
        var element = document.getElementById("scene");
        var menu = document.getElementById("Menu");
        element.removeChild(menu);
        var element = document.getElementById("camera");
        var id = document.createAttribute("id");
        id.value = "Menu";
        menu.setAttributeNode(id);

        var fullPic = document.createElement("a-entity");

        var id = document.createAttribute("id");
        var geometry = document.createAttribute("geometry");
        var material = document.createAttribute("material");
        var position = document.createAttribute("position");

        id.value = "fullPic";
        geometry.value = "primitive: plane; height: 0.7; width: 1";
        material.value = "src: #zadig";
        position.value = "0 0 -1";

        fullPic.setAttributeNode(id);
        fullPic.setAttributeNode(geometry);
        fullPic.setAttributeNode(material);
        fullPic.setAttributeNode(position);
        element.appendChild(fullPic);
    }
    function exitFullScreenMode() {
        var element = document.getElementById("camera");
        var fullPic = document.getElementById("fullPic");
        element.removeChild(fullPic);
        fulScreen = false;
        createOpenMainMenuIcon();
        mainMenuOpen = false;
    }
    function handleFirstOptionClick() {
        if (firstMenuOpen) {
            closeInnerMenu();
            firstMenuOpen = false;
        } else {
            if (secondMenuOpen || thirdMenuOpen) {
                closeInnerMenu();
            }
            openFirstMenu();
            firstMenuOpen = true;
            secondMenuOpen = false;
            thirdMenuOpen = false;
        }
    }
    function handleSecondOptionClick() {
        if (secondMenuOpen) {
            closeInnerMenu();
            secondMenuOpen = false;
        } else {
            if (firstMenuOpen || thirdMenuOpen) {
                closeInnerMenu();
            }
            openSecondMenu();
            firstMenuOpen = false;
            secondMenuOpen = true;
            thirdMenuOpen = false;
        }
    }
    function handleThirdOptionClick() {
       if (thirdMenuOpen) {
            closeInnerMenu();
            thirdMenuOpen = false;
        } else {
            if (secondMenuOpen || firstMenuOpen) {
                closeInnerMenu();
            }
            openThirdMenu();
            firstMenuOpen = false;
            secondMenuOpen = false;
            thirdMenuOpen = true;
        }
    }
    function openMainMenu() {
        //Get Scene To Add New Elements
        var scene = document.getElementById("scene");
        var element = document.createElement("a-entity");
        var id = document.createAttribute("id");
        id.value = "Menu";
        element.setAttributeNode(id);
        var menuicon = document.getElementById("menu-icon");
        scene.removeChild(menuicon);

        //Option 1


        //Create Rectangle
        var rect = document.createElement("a-entity");
        //Create Attributes for Rectangle:
        //Position - Where the object is located
        //Geometry - Shape of Object
        //Material - Color or Picture that the object holds
        //Scale - size of object
        //id - Object's id so it can be called again
        //Rotation - Rotation of object
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var rotation = document.createAttribute("rotation");
        //Set Attribute Values
        //Geometry- Primitive: Box is basic cube shape
        //Rotation - 10 0 0 is Rotated 10 degrees around x axis
        //Id - Id so it can be called again
        //Size - 0.25 - X dimension, 0.1 - Y dimension, 0 Z-dimension 
        geometry.value = "primitive: box";
        rotation.value = "10 0 0"
        id.value = "Option1";
        size.value = "0.25 0.1 0";
        color.value = "src: #MainImg1";
        posit.value = "0 -5 3";
        //Add Attributes to Rectangle
        rect.setAttributeNode(posit);
        rect.setAttributeNode(id);
        rect.setAttributeNode(rotation);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);

        //Scale Animation
        var rectAnimSize = document.createElement("a-animation");
        //Create Scale Animation Attributes
        //Attribute - the attribute of the entity you want to change
        //To - what you want the attribute's value to be at the end
        //Duration - how long the animation takes
        var att = document.createAttribute("attribute");
        var to = document.createAttribute("to");
        var duration = document.createAttribute("duration");
        //Set Attribute Values
        //Duration - 2000 ms
        //Attribute - Scale = Size
        //To - X Axis: 6, Y Axis: 3, Z Axis: 0
        duration.value = "2000";
        att.value = "scale";
        to.value = "6 3 0";
        //Add Attributes to Animations
        rectAnimSize.setAttributeNode(duration);
        rectAnimSize.setAttributeNode(to);
        rectAnimSize.setAttributeNode(att);
        //Add Animation to Rectangle
        rect.appendChild(rectAnimSize);

        //Move Animation
        var rectAnimMove = document.createElement("a-animation");
        //Create Move Animation Attributes
        var att = document.createAttribute("attribute");
        var to = document.createAttribute("to");
        var duration = document.createAttribute("duration");
        //Set Attribute Values
        //Duration - 2000 ms
        //Attribute - Position
        //To - X Axis: 0, Y Axis: 4, Z Axis: -3
        to.value = " 0 4 -4";
        duration.value = "2000";
        att.value = "position";
        //Add Attribute to Animations
        rectAnimMove.setAttributeNode(att);
        rectAnimMove.setAttributeNode(duration);
        rectAnimMove.setAttributeNode(to);
        rect.appendChild(rectAnimMove);
        //Add Animation to Rectangle
        element.appendChild(rect);

    
        //Option 2


        //Create Rectangle
        var rect = document.createElement("a-entity");
        //Create Attributes for Rectangle
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var rotation = document.createAttribute("rotation");
        //Set Attribute Values
        geometry.value = "primitive: box";
        rotation.value = "0 0 0"
        id.value = "Option2";
        size.value = "0.25 0.1 0";
        color.value = "color: red";
        posit.value = "0 -5 3";
        //Add Attributes to Rectangle
        rect.setAttributeNode(posit);
        rect.setAttributeNode(id);
        rect.setAttributeNode(rotation);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);

        //Scale Animation
        var rectAnimSize = document.createElement("a-animation");
        //Create Scale Animation Attributes
        var att = document.createAttribute("attribute");
        var to = document.createAttribute("to");
        var duration = document.createAttribute("duration");
        //Set Attribute Values
        duration.value = "2000";
        att.value = "scale";
        to.value = "6 3 0";
        //Add Attributes to Animations
        rectAnimSize.setAttributeNode(duration);
        rectAnimSize.setAttributeNode(to);
        rectAnimSize.setAttributeNode(att);
        //Add Animation to Rectangle
        rect.appendChild(rectAnimSize);

        //Move Animation
        var rectAnimMove = document.createElement("a-animation");
        //Create Move Animation Attributes
        var att = document.createAttribute("attribute");
        var to = document.createAttribute("to");
        var duration = document.createAttribute("duration");
        //Set Attribute Values
        to.value = " 0 0 -4";
        duration.value = "2000";
        att.value = "position";
        //Add Attribute to Animations
        rectAnimMove.setAttributeNode(att);
        rectAnimMove.setAttributeNode(duration);
        rectAnimMove.setAttributeNode(to);
        rect.appendChild(rectAnimMove);
        //Add Animation to Rectangle
        element.appendChild(rect);


        //Option 3


        //Create Rectangle
        var rect = document.createElement("a-entity");
        //Create Attributes for Rectangle
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var rotation = document.createAttribute("rotation");
        //Set Attribute Values
        geometry.value = "primitive: box";
        rotation.value = "-10 0 0"
        id.value = "Option3";
        size.value = "0.25 0.1 0";
        color.value = "color: blue";
        posit.value = "0 -5 3";
        //Add Attributes to Rectangle
        rect.setAttributeNode(posit);
        rect.setAttributeNode(id);
        rect.setAttributeNode(rotation);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);

        //Scale Animation
        var rectAnimSize = document.createElement("a-animation");
        //Create Scale Animation Attributes
        var att = document.createAttribute("attribute");
        var to = document.createAttribute("to");
        var duration = document.createAttribute("duration");
        //Set Attribute Values
        duration.value = "2000";
        att.value = "scale";
        to.value = "6 3 0";
        //Add Attributes to Animations
        rectAnimSize.setAttributeNode(duration);
        rectAnimSize.setAttributeNode(to);
        rectAnimSize.setAttributeNode(att);
        //Add Animation to Rectangle
        rect.appendChild(rectAnimSize);

        //Move Animation
        var rectAnimMove = document.createElement("a-animation");
        //Create Move Animation Attributes
        var att = document.createAttribute("attribute");
        var to = document.createAttribute("to");
        var duration = document.createAttribute("duration");
        //Set Attribute Values
        to.value = " 0 -4 -4";
        duration.value = "2000";
        att.value = "position";
        //Add Attribute to Animations
        rectAnimMove.setAttributeNode(att);
        rectAnimMove.setAttributeNode(duration);
        rectAnimMove.setAttributeNode(to);
        rect.appendChild(rectAnimMove);
        //Add Animation to Rectangle
        element.appendChild(rect);

        scene.appendChild(element);

        //Add Event Listener
        var Option1 = document.getElementById("Option1");
        Option1.addEventListener("click", handleFirstOptionClick);
        var Option2 = document.getElementById("Option2");
        Option2.addEventListener("click", handleSecondOptionClick);
        var Option3 = document.getElementById("Option3");
        Option3.addEventListener("click", handleThirdOptionClick);
    }
    function openFirstMenu() {
        var element = document.getElementById("Menu");
        var Option1 = document.getElementById("Option1");
        element.removeChild(Option1);
        //Create Rectangle
        var rect = document.createElement("a-entity");
        //Create Attributes for Rectangle
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var rotation = document.createAttribute("rotation");
        //Set Attribute Values
        geometry.value = "primitive: box";
        rotation.value = "10 0 0"
        id.value = "Option1";
        size.value = "6 3 0";
        color.value = "color: white";
        posit.value = "0 4 -4";
        //Add Attributes to Rectangle
        rect.setAttributeNode(posit);
        rect.setAttributeNode(id);
        rect.setAttributeNode(rotation);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        element.appendChild(rect);
        var Option1 = document.getElementById("Option1");
        Option1.addEventListener("click", handleFirstOptionClick);



        var firstMenu = document.createElement("a-entity");
        var id = document.createAttribute("id");
        id.value = "innerMenu";
        firstMenu.setAttributeNode(id);
        var rect = document.createElement("a-entity");
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        geometry.value = "primitive: box";
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var look = document.createAttribute("rotation");
        look.value = "-10 45 0"
        id.value = "Option1-1";
        size.value = "0.25 0.1 0";
        color.value = "src: #Img3";
        posit.value = "0 4 -5";
        rect.setAttributeNode(posit);
        rect.setAttributeNode(look);
        rect.setAttributeNode(id);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        var rectAnimSize = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "scale";
        rectAnimSize.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "6 3 0";
        rectAnimSize.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimSize.setAttributeNode(duration);
        rect.appendChild(rectAnimSize);
        var rectAnimMove = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "position";
        rectAnimMove.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = " -8 -4 -2";
        rectAnimMove.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimMove.setAttributeNode(duration);
        rect.appendChild(rectAnimMove);
        firstMenu.appendChild(rect);


        //second option
        var rect = document.createElement("a-entity");
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        geometry.value = "primitive: box";
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var look = document.createAttribute("rotation");
        look.value = "0 45 0"
        id.value = "Option1-2";
        size.value = "0.25 0.1 0";
        color.value = "src: #Img2";
        posit.value = "0 4 -5";
        rect.setAttributeNode(posit);
        rect.setAttributeNode(look);
        rect.setAttributeNode(id);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        var rectAnimSize = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "scale";
        rectAnimSize.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "6 3 0";
        rectAnimSize.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimSize.setAttributeNode(duration);
        rect.appendChild(rectAnimSize);
        var rectAnimMove = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "position";
        rectAnimMove.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = " -8 0 -2";
        rectAnimMove.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimMove.setAttributeNode(duration);
        rect.appendChild(rectAnimMove);
        firstMenu.appendChild(rect);


         //Third option
        var rect = document.createElement("a-entity");
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        geometry.value = "primitive: box";
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var look = document.createAttribute("rotation");
        look.value = "10 45 0"
        id.value = "Option1-3";
        size.value = "0.25 0.1 0";
        color.value = "src: #Img1";
        posit.value = "0 4 -5";
        rect.setAttributeNode(posit);
        rect.setAttributeNode(look);
        rect.setAttributeNode(id);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        var rectAnimSize = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "scale";
        rectAnimSize.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "6 3 0";
        rectAnimSize.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimSize.setAttributeNode(duration);
        rect.appendChild(rectAnimSize);
        var rectAnimMove = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "position";
        rectAnimMove.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = " -8 4 -2";
        rectAnimMove.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimMove.setAttributeNode(duration);
        rect.appendChild(rectAnimMove);
        firstMenu.appendChild(rect);
        element.appendChild(firstMenu);

        var element = document.getElementById("Option1-1");
        element.addEventListener("click", handleFirstImageOptionClick);
        var element = document.getElementById("Option1-2");
        element.addEventListener("click", handleSecondImageOptionClick);
        var element = document.getElementById("Option1-3");
        element.addEventListener("click", handleThirdImageOptionClick);
    }
    function openSecondMenu() {
        var element = document.getElementById("Menu");
        var Option2 = document.getElementById("Option2");
        element.removeChild(Option2);
        //Create Rectangle
        var rect = document.createElement("a-entity");
        //Create Attributes for Rectangle
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var rotation = document.createAttribute("rotation");
        //Set Attribute Values
        geometry.value = "primitive: box";
        rotation.value = "0 0 0"
        id.value = "Option2";
        size.value = "6 3 0";
        color.value = "color: white";
        posit.value = "0 0 -4";
        //Add Attributes to Rectangle
        rect.setAttributeNode(posit);
        rect.setAttributeNode(id);
        rect.setAttributeNode(rotation);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        element.appendChild(rect);
        var Option2 = document.getElementById("Option2");
        Option2.addEventListener("click", handleSecondOptionClick);



        var secondMenu = document.createElement("a-entity");
        var id = document.createAttribute("id");
        id.value = "innerMenu";
        secondMenu.setAttributeNode(id);
        var rect = document.createElement("a-entity");
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        geometry.value = "primitive: box";
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var look = document.createAttribute("rotation");
        look.value = "-10 -45 0"
        id.value = "Option2-1";
        size.value = "0.25 0.1 0";
        color.value = "color: green";
        posit.value = "0 0 -5";
        rect.setAttributeNode(posit);
        rect.setAttributeNode(look);
        rect.setAttributeNode(id);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        var rectAnimSize = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "scale";
        rectAnimSize.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "6 3 0";
        rectAnimSize.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimSize.setAttributeNode(duration);
        rect.appendChild(rectAnimSize);
        var rectAnimMove = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "position";
        rectAnimMove.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "8 -4 -2";
        rectAnimMove.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimMove.setAttributeNode(duration);
        rect.appendChild(rectAnimMove);
        secondMenu.appendChild(rect);

        //second option
        var rect = document.createElement("a-entity");
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        geometry.value = "primitive: box";
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var look = document.createAttribute("rotation");
        look.value = "0 -45 0"
        id.value = "Option2-2";
        size.value = "0.25 0.1 0";
        color.value = "color: green";
        posit.value = "0 0 -5";
        rect.setAttributeNode(posit);
        rect.setAttributeNode(look);
        rect.setAttributeNode(id);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        var rectAnimSize = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "scale";
        rectAnimSize.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "6 3 0";
        rectAnimSize.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimSize.setAttributeNode(duration);
        rect.appendChild(rectAnimSize);
        var rectAnimMove = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "position";
        rectAnimMove.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "8 0 -2";
        rectAnimMove.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimMove.setAttributeNode(duration);
        rect.appendChild(rectAnimMove);
        secondMenu.appendChild(rect);


         //Third option
        var rect = document.createElement("a-entity");
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        geometry.value = "primitive: box";
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var look = document.createAttribute("rotation");
        look.value = "10 -45 0"
        id.value = "Option2-3";
        size.value = "0.25 0.1 0";
        color.value = "color: green";
        posit.value = "0 0 -5";
        rect.setAttributeNode(posit);
        rect.setAttributeNode(look);
        rect.setAttributeNode(id);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        var rectAnimSize = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "scale";
        rectAnimSize.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "6 3 0";
        rectAnimSize.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimSize.setAttributeNode(duration);
        rect.appendChild(rectAnimSize);
        var rectAnimMove = document.createElement("a-animation");
        var att = document.createAttribute("attribute");
        att.value = "position";
        rectAnimMove.setAttributeNode(att);
        var to = document.createAttribute("to");
        to.value = "8 4 -2";
        rectAnimMove.setAttributeNode(to);
        var duration = document.createAttribute("duration");
        duration.value = "2000";
        rectAnimMove.setAttributeNode(duration);
        rect.appendChild(rectAnimMove);
        secondMenu.appendChild(rect);
        element.appendChild(secondMenu);
    }
    function openThirdMenu() {
        var element = document.getElementById("Menu");
        var Option3 = document.getElementById("Option3");
        element.removeChild(Option3);
        //Create Rectangle
        var rect = document.createElement("a-entity");
        //Create Attributes for Rectangle
        var posit = document.createAttribute("position");
        var geometry = document.createAttribute("geometry");
        var color = document.createAttribute("material");
        var size = document.createAttribute("scale");
        var id = document.createAttribute("id");
        var rotation = document.createAttribute("rotation");
        //Set Attribute Values
        geometry.value = "primitive: box";
        rotation.value = "-10 0 0"
        id.value = "Option3";
        size.value = "6 3 0";
        color.value = "color: white";
        posit.value = "0 -4 -4";
        //Add Attributes to Rectangle
        rect.setAttributeNode(posit);
        rect.setAttributeNode(id);
        rect.setAttributeNode(rotation);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
        element.appendChild(rect);
        var Option3 = document.getElementById("Option3");
        Option3.addEventListener("click", handleThirdOptionClick);



        var thirdMenu = document.createElement("a-entity");
        var id = document.createAttribute("id");
        id.value = "innerMenu";
        thirdMenu.setAttributeNode(id);
        var rect = document.createElement("a-video");
        var posit = document.createAttribute("position");
        var width = document.createAttribute("width");
        var src = document.createAttribute("src");
        var height = document.createAttribute("height");
        var id = document.createAttribute("id");
        rect.setAttributeNode(posit);
        rect.setAttributeNode(look);
        rect.setAttributeNode(id);
        rect.setAttributeNode(geometry);
        rect.setAttributeNode(color);
        rect.setAttributeNode(size);
  
        thirdMenu.appendChild(rect);

        
        element.appendChild(thirdMenu);
    }
    function closeMainMenu() {
        if (fullScreen) {
            var element = document.getElementById("camera");
        } else {
            var element = document.getElementById("scene");
        }
        var menu = document.getElementById("Menu");
        element.removeChild(menu);
        var menuicon = document.getElementById("menu-icon");
        element.removeChild(menuicon);
    }
    function closeInnerMenu() {
        var element = document.getElementById("Menu");
        var innerMenu = document.getElementById("innerMenu");
        element.removeChild(innerMenu);
        if (firstMenuOpen) {
            //Create Rectangle
            var rect = document.createElement("a-entity");
            //Create Attributes for Rectangle
            var posit = document.createAttribute("position");
            var geometry = document.createAttribute("geometry");
            var color = document.createAttribute("material");
            var size = document.createAttribute("scale");
            var id = document.createAttribute("id");
            var rotation = document.createAttribute("rotation");
            //Set Attribute Values
            geometry.value = "primitive: box";
            rotation.value = "10 0 0"
            id.value = "Option1";
            size.value = "6 3 0";
            color.value = "color: yellow";
            posit.value = "0 4 -4";
            //Add Attributes to Rectangle
            rect.setAttributeNode(posit);
            rect.setAttributeNode(id);
            rect.setAttributeNode(rotation);
            rect.setAttributeNode(geometry);
            rect.setAttributeNode(color);
            rect.setAttributeNode(size);
            element.appendChild(rect);
            var Option1 = document.getElementById("Option1");
            Option1.addEventListener("click", handleFirstOptionClick);
        } else if (secondMenuOpen) {
            //Create Rectangle
            var rect = document.createElement("a-entity");
            //Create Attributes for Rectangle
            var posit = document.createAttribute("position");
            var geometry = document.createAttribute("geometry");
            var color = document.createAttribute("material");
            var size = document.createAttribute("scale");
            var id = document.createAttribute("id");
            var rotation = document.createAttribute("rotation");
            //Set Attribute Values
            geometry.value = "primitive: box";
            rotation.value = "0 0 0"
            id.value = "Option2";
            size.value = "6 3 0";
            color.value = "color: red";
            posit.value = "0 0 -4";
            //Add Attributes to Rectangle
            rect.setAttributeNode(posit);
            rect.setAttributeNode(id);
            rect.setAttributeNode(rotation);
            rect.setAttributeNode(geometry);
            rect.setAttributeNode(color);
            rect.setAttributeNode(size);
            element.appendChild(rect);
            var Option2 = document.getElementById("Option2");
            Option2.addEventListener("click", handleSecondOptionClick);
        } else if (thirdMenuOpen) {
            //Create Rectangle
            var rect = document.createElement("a-entity");
            //Create Attributes for Rectangle
            var posit = document.createAttribute("position");
            var geometry = document.createAttribute("geometry");
            var color = document.createAttribute("material");
            var size = document.createAttribute("scale");
            var id = document.createAttribute("id");
            var rotation = document.createAttribute("rotation");
            //Set Attribute Values
            geometry.value = "primitive: box";
            rotation.value = "-10 0 0"
            id.value = "Option3";
            size.value = "6 3 0";
            color.value = "color: blue";
            posit.value = "0 -4 -4";
            //Add Attributes to Rectangle
            rect.setAttributeNode(posit);
            rect.setAttributeNode(id);
            rect.setAttributeNode(rotation);
            rect.setAttributeNode(geometry);
            rect.setAttributeNode(color);
            rect.setAttributeNode(size);
            element.appendChild(rect);
            var Option3 = document.getElementById("Option3");
            Option3.addEventListener("click", handleThirdOptionClick);
        }
    }