document.addEventListener('DOMContentLoaded', function() {
    // document.write('<div id="tis-root" ><div id="tis-grid"></div><div id="tis-status"></div></div>');
    var gridElt = document.getElementById('tis-grid'),
        gridElts = [],
        statusElt = document.getElementById('tis-status'),
        grid = [],
        shadowGrid = [],
        w = 10,
        h = 22,
        s = w * h,
        // I J L O S T Z
        backgroundLUT = '#080808 #0dd #44f #e80 #ee0 #0e0 #a0a #f22'.split(' '),
        // http://tetris.wikia.com/wiki/SRS
        //     1     2     4     8
        //    16    32    64   128
        //   256   512  1024  2048
        //  4096  8192 16384 32768
        shapes = [, [240, 17476, 3840, 8738], // I
            [113, 550, 1136, 802], // J
            [116, 1570, 368, 547], // L
            [102, 102, 102, 102], // O
            [54, 1122, 864, 561], // S
            [114, 610, 624, 562], // T
            [99, 612, 1584, 306]
        ], // Z
        currentTetromino,
        currentX,
        currentY,
        currentRotation,
        lock = 1,
        lost,
        score = 0,
        lines = 0,
        level = 1,
        bag = [],
        i, x, y, rx, ry, tmp, tmp2;

    for (i = 0; i < s; i++) {
        gridElt.innerHTML += '<div class="tile" id="tis-' + i + '" ></div>';
    }

    for (i = 0; i < s; i++) {
        gridElts[i] = document.getElementById('tis-' + i);
    }


    function tick() {

        for (y = 0; y < h; y++) {
            for (x = 0; x < w; x++) {
                i = y * w + x;
                if (i % 2 === 0) {
                    gridElts[i].style.background = "#FF0";
                }
            }
        }

        // window.setTimeout(tick, 1000);
    }

    tick();
});
