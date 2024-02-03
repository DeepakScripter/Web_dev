   function changeColors() {
        document.documentElement.style.setProperty(
          "--primary-color",
          getRandomColor()
        );
        document.documentElement.style.setProperty(
          "--secondary-color",
          getRandomColor()
        );
        document.documentElement.style.setProperty(
          "--accent-color",
          getRandomColor()
        );
      }

      function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
      }