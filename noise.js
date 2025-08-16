var canvas = document.getElementById('canvas'),
            
/* The getContext() method returns an object 
that provides methods and properties for 
drawing on the canvas. */
ctx = canvas.getContext('2d');

/* Setting canvas width and height equal to
window screen width and height. */
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

// Function to generate noise effect
function generate_noise(ctx) {
    var w = ctx.canvas.width,
    h = ctx.canvas.height,
                
    /* This creates a new ImageData object
    with the specified dimensions(i.e canvas
    width and height). All pixels are set to
    transparent black (i.e rgba(0,0,0,0)). */
    idata = ctx.createImageData(w, h), 
                
    // Creating Uint32Array typed array
    buffer32 = new Uint32Array(idata.data.buffer), 
    buffer_len = buffer32.length,
    i = 0
    
    for ( ; i < buffer_len; i++)
        buffer32[i] = 
            ((255 * Math.random()) | 0) << 24;
            
    /* The putImageData() method puts the image
    data (from a specified ImageData object)
    back onto the canvas. */
    ctx.putImageData(idata, 0, 0); 
}

// Creating animation effect
var toggle = true;
(function loop() {
    toggle = !toggle;
    if (toggle) {
            
        // Loop function is called each time
        // before next repaint.
        requestAnimationFrame(loop); 
        return;
    }
generate_noise(ctx);
requestAnimationFrame(loop);
})();
