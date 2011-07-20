<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Bubble Graph</title>
        <style type="text/css" media="screen">
            body {
                background: #333;
                color: #999;
                font: 300 100.01%/1.2 "Segoe UI", "Helvetica Neue", Helvetica, "Arial Unicode", Arial, sans-serif;
                margin: 0 30px;
            }
          
          	.ui-widget {
          		font-size: 1em !important;
          	}

        	input[type="text"] { 
			    background:#fff url(../../../images/shadow.gif) repeat-x top;
			    border-bottom:1px solid #ddd;
			    border-left:1px solid #c3c3c3;
			    border-right:1px solid #c3c3c3;
			    border-top:1px solid #7c7c7c;
			    color:#333;
			    font-size:100%;
			    margin:0;
			    padding:6px 0;
			    border: 1px solid #fff;
			    -webkit-border-radius: 4px;
				-moz-border-radius: 4px;
				border-radius: 4px;

    		}


			.hasColor input[type="text"] {
				width: 80%;
			}

			table { 
				color: #fff; 
				-webkit-border-bottom-right-radius: 10px;
				-moz-border-radius-bottomright: 10px;
				border-bottom-right-radius: 10px;

			}

			th { 
				text-align: left;
			}
		</style>

        <link type="text/css" rel="stylesheet" href="jquery.miniColors.css" />
		<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/smoothness/jquery-ui.css" type="text/css" media="all" />

        <script src="raphael.js" type="text/javascript" charset="utf-8"></script>
       	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.js"></script>
       	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"></script>
		<script type="text/javascript" src="jquery.miniColors.js"></script>
		
        <script type="text/javascript">
        var BG = {};

        $(function () {
        	$('.colors').miniColors();

            BG.create = function() {
        		var name = $('#newName');
        		var valx = $('#newX');
        		var colorx = $('#newXColor');
        		var valy = $('#newY');
        		var colory = $('#newYColor');

        		BG.circlePair(
	        		name.val(), 
	        		200, 
	        		200, 
	        		valx.val(), 
	        		colorx.data('hsb'), 
	        		valy.val(), 
	        		colory.data('hsb'));
	        	
	        	$('#newName, #newX, #newY').val('');
        	};

        	BG.showCreateButton = function() {
				$('#newName, #newX, #newY').val('');
				$('#buttons').html($('<button />')
					.text('Create').button()
					.click(BG.create));
			};
        	 
        	BG.showCreateButton();
        	

            // this is where colorpicker created
		    var pi = Math.PI;
		
		    function angle(x, y) {
		        return (x < 0) * 180 + Math.atan(-y / -x) * 180 / pi;
		    }
		
			var R = Raphael("content", 3000, 3000);

			BG.circlePair = function(name, x, y, size1, colorx, size2, colory) {
				var X = R.circle(x, y, size1).attr({
				    fill: "hsb(" + [colorx.h, colorx.s, colorx.b].join(',') + ")",
				    stroke: "none",
				    opacity: .5
				}).drag(function (dx, dy) {
					X.attr({cx: this.ox + dx, cy: this.oy + dy});
					Y.attr({cx: this.oyx + dx, cy: this.oyy + dy});
					label.attr({x: this.olx + dx, y: this.oly + dy});
				},function () {
				    this.ox = this.attr("cx");
				    this.oy = this.attr("cy");

					this.oyx = Y.attr("cx");
					this.oyy = Y.attr("cy");

					this.olx = label.attr("x");
					this.oly = label.attr("y");
				});
			
				var Y = R.circle(x, y, size2).attr({
				    fill: "hsb(" + [colory.h, colory.s, colory.b].join(',') + ")",
				    stroke: "none",
				    opacity: .5
				}).drag(function (dx, dy) {	
					this.attr({cx: this.ox + dx, cy: this.oy + dy});
				},function () {
				    this.ox = this.attr("cx");
				    this.oy = this.attr("cy");
				});

				var label = R.text(x, y - 30, name).attr({
					fill: '#fff', 
					"font-size": "15px"
				}).drag(function(dx, dy){
					this.attr({x: this.ox + dx, y: this.oy + dy});		
				}, function() {
					this.ox = this.attr("x");
					this.oy = this.attr("y");
				});

				X.node.onclick = Y.node.onclick = label.node.onclick =  function() {
					$('#newName').val(name);
					$('#newXColor').miniColors('value', hsb2hex(colorx));
					$('#newYColor').miniColors('value', hsb2hex(colory));
					$('#newX').val(size1);
					$('#newY').val(size2);
					$('#buttons').html('')
						.append($('<button />').text('Update').button()
							.click(function() {
								size1 = $('#newX').val();
								size2 = $('#newY').val();
								name = $('#newName').val();
								colorx = $('#newXColor').data('hsb');
								colory = $('#newYColor').data('hsb');

								label.attr('text', name);
								X.attr('r', size1);
								X.attr('fill', "hsb(" + [colorx.h, colorx.s, colorx.b].join(',') + ")");

								Y.attr('r', size2);
								Y.attr('fill', "hsb(" + [colory.h, colory.s, colory.b].join(',') + ")");

								BG.showCreateButton();
							
						}))
						.append($('<button />')
							.text('Cancel').button()
							.click(BG.showCreateButton));
				};
			};
		});
			
           
        </script>
    </head>
    <body>
        <div id="content"></div>
		<table cellpadding="5" style="position: fixed; left: 0; top: 0; padding: .5em; background: #999; opacity: .7;">
			<tr>
				<th>Name</td>
				<th>Outer</th>
				<th>Inner</th>
				<th></th>
			</tr>
			<tr>
				<td><input type="text" id="newName"></td>
				<td class="hasColor">
					<input type="text" id="newX" class="ui-widget">
					<input type="hidden" id="newXColor" name="newXColor" class="colors" size="7" />
				</td>
				<td class="hasColor">
					<input type="text" id="newY">
					<input type="hidden" id="newYColor" name="newYColor" class="colors" size="7" />
				</td>
				<td id="buttons"><button id="createButton">Create</button></td>
			</tr>
		</table>
		
    </body>
</html>
