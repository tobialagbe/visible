# Tobialagbe/visible

Visible is a Javascript utility for detecting if an element is visible within the viewport.

## Installation

To use, simply copy the src/visible-pure.min.js file into your project directory and create a link in your file 

```script
<script src="src/visible-pure.min.js"></script>
```

## Usage

```script

<script>

    //by default 'full' is set to false, if set to true,
    //the entire element has to be visible in the viewport
    //before it is marked as visible within the viewport

    var visible = new Visible({full:false});


    $(window).scroll(function(){
        
        var visibleStatus = visible.isVisible('elementId');
        console.log(visibleStatus);

    });

</script>

```


## License
[MIT](https://choosealicense.com/licenses/mit/)