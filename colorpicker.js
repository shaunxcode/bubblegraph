/*!
 * Color Picker 0.1.0 - Raphael plugin
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Based on Color Wheel (http://jweir.github.com/colorwheel) by John Weir (http://famedriver.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
(function (Raphael) {
    Raphael.colorpicker = function (x, y, size, initcolor, element) {
        return new ColorPicker(x, y, size, initcolor, element);
    };
    Raphael.fn.colorPickerIcon = function (x, y, r) {
	/*
        var segments = pi * r * 2 / Math.min(r / 8, 4);
        var a = pi / 2 - pi * 2 / segments * 1.5,
            path = ["M", x, y - r, "A", r, r, 0, 0, 1, r * Math.cos(a) + x, y - r * Math.sin(a), "L", x, y, "z"].join();
        for (var i = 0; i < segments; i++) {
            this.path(path).attr({
                stroke: "none",
                fill: "hsb(" + (segments - i) * (360 / segments) + ", 100, 100)",
                rotation: [90 + (360 / segments) * i, x, y]
            });
        }
*/
        return this.circle(x, y, r).attr({
            fill: "r#fff-#fff",
            "fill-opacity": 0,
            "stroke-width": Math.round(r * .03),
            stroke: "#fff"
        });
    };
    var pi = Math.PI;
    function angle(x, y) {
        return (x < 0) * 180 + Math.atan(-y / -x) * 180 / pi;
    }
    var doc = document, win = window,
        ColorPicker = function (x, y, size, initcolor, element) {
            size = size || 200;
            var w3 = 3 * size / 200,
                w1 = size / 200,
                fi = 1.6180339887,
                size20 = size / 20,
                size2 = size / 2,
                padding = 2 * size / 200,
                height = size + size20 * 2 + padding * 3,
                t = this,
                H = 1, S = 1, B = 1, s = size - (size20 * 4),
                r = element ? Raphael(element, size, height) : Raphael(x, y, size, height),
                xy = s / 6 + size20 * 2 + padding,
                wh = s * 2 / 3 - padding * 2;
            w1 < 1 && (w1 = 1);
            w3 < 1 && (w3 = 1);


            var circle = r.colorPickerIcon(size2, size2, size2 - padding);

            t.cursor = r.set();
            t.cursor.push(r.circle(size2, size2, size20 / 2).attr({
                stroke: "#000",
                opacity: .5,
                "stroke-width": w3
            }));
            t.cursor.push(t.cursor[0].clone().attr({
                stroke: "#fff",
                opacity: 1,
                "stroke-width": w1
            }));
            t.disc = r.circle(size2, size2, size2 - padding).attr({
                fill: "#000",
                "fill-opacity": 0,
                stroke: "none",
                cursor: "crosshair"
            });
            var style = t.disc.node.style;
            style.unselectable = "on";
            style.MozUserSelect =  "none";
            style.WebkitUserSelect= "none";


            t.padding = padding;
            t.size2 = size2;
            t.size20 = size20;
            t.x = x;
            t.y = y;

            // events
            t.disc.drag(function (dx, dy, x, y) {
                t.docOnMove(dx, dy, x, y);
            }, function (x, y) {
                var scrollY = doc.documentElement.scrollTop || doc.body.scrollTop,
                    scrollX = doc.documentElement.scrollLeft || doc.body.scrollLeft;
                t.hsOnTheMove = true;
                t.setHS(x + scrollX - t.x, y + scrollY - t.y);
            }, function () {
                t.hsOnTheMove = false;
            });

        };
    
    ColorPicker.prototype.setHS = function (x, y) {
        var X = x - this.size2,
            Y = y - this.size2,
            R = this.size2 - this.size20 / 2 - this.padding,
            d = angle(X, Y),
            rd = d * pi / 180;
        isNaN(d) && (d = 0);
        if (X * X + Y * Y > R * R) {
            x = R * Math.cos(rd) + this.size2;
            y = R * Math.sin(rd) + this.size2;
        }
	
        this.cursor.attr({cx: x, cy: y});
    };

    ColorPicker.prototype.docOnMove = function (dx, dy, x, y) {
 
       var scrollY = doc.documentElement.scrollTop || doc.body.scrollTop,
            scrollX = doc.documentElement.scrollLeft || doc.body.scrollLeft;
        if (this.hsOnTheMove) {
            this.setHS(x + scrollX - this.x, y + scrollY - this.y);
        }

    };
    ColorPicker.prototype.remove = function () {
        this.raphael.remove();
        this.color = function () {
            return false;
        };
    };
})(window.Raphael);