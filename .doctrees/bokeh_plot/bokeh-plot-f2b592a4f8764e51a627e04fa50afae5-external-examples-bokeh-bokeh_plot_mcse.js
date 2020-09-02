(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("74fff1d4-50ba-4893-b0cd-76d6dffec130");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '74fff1d4-50ba-4893-b0cd-76d6dffec130' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"6d8f6337-0e79-4472-9942-a941a3776773":{"roots":{"references":[{"attributes":{"children":[{"id":"89183"},{"id":"89181"}]},"id":"89184","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"89175"},"selection_policy":{"id":"89174"}},"id":"89143","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89145","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89131","type":"Circle"},{"attributes":{"callback":null},"id":"89081","type":"HoverTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"89177"},"selection_policy":{"id":"89176"}},"id":"89152","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"89163"},"selection_policy":{"id":"89162"}},"id":"89129","type":"ColumnDataSource"},{"attributes":{"source":{"id":"89152"}},"id":"89154","type":"CDSView"},{"attributes":{"data_source":{"id":"89143"},"glyph":{"id":"89144"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89145"},"selection_glyph":null,"view":{"id":"89147"}},"id":"89146","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"89102"}],"center":[{"id":"89105"},{"id":"89109"}],"left":[{"id":"89106"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"89146"},{"id":"89148"},{"id":"89149"},{"id":"89150"},{"id":"89153"}],"title":{"id":"89155"},"toolbar":{"id":"89120"},"toolbar_location":null,"x_range":{"id":"89094"},"x_scale":{"id":"89098"},"y_range":{"id":"89096"},"y_scale":{"id":"89100"}},"id":"89093","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"89143"}},"id":"89147","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"89151","type":"Dash"},{"attributes":{},"id":"89064","type":"LinearScale"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.21484300137312468},"id":"89148","type":"Span"},{"attributes":{},"id":"89079","type":"UndoTool"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716425007633},"id":"89149","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"89172"},"ticker":{"id":"89103"}},"id":"89102","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"89096","type":"DataRange1d"},{"attributes":{"data_source":{"id":"89152"},"glyph":{"id":"89151"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"89154"}},"id":"89153","type":"GlyphRenderer"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"89170"},"ticker":{"id":"89107"}},"id":"89106","type":"LinearAxis"},{"attributes":{},"id":"89062","type":"LinearScale"},{"attributes":{"text":"mu"},"id":"89155","type":"Title"},{"attributes":{},"id":"89098","type":"LinearScale"},{"attributes":{},"id":"89100","type":"LinearScale"},{"attributes":{"axis":{"id":"89070"},"dimension":1,"ticker":null},"id":"89073","type":"Grid"},{"attributes":{},"id":"89172","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"89150","type":"Span"},{"attributes":{},"id":"89103","type":"BasicTicker"},{"attributes":{"axis":{"id":"89102"},"ticker":null},"id":"89105","type":"Grid"},{"attributes":{},"id":"89067","type":"BasicTicker"},{"attributes":{"axis":{"id":"89106"},"dimension":1,"ticker":null},"id":"89109","type":"Grid"},{"attributes":{},"id":"89107","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"89182"},"toolbar_location":"above"},"id":"89183","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"89118"}},"id":"89112","type":"BoxZoomTool"},{"attributes":{},"id":"89111","type":"PanTool"},{"attributes":{},"id":"89110","type":"ResetTool"},{"attributes":{},"id":"89113","type":"WheelZoomTool"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"89158"},"ticker":{"id":"89071"}},"id":"89070","type":"LinearAxis"},{"attributes":{"overlay":{"id":"89119"}},"id":"89114","type":"LassoSelectTool"},{"attributes":{},"id":"89115","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"89160"},"ticker":{"id":"89067"}},"id":"89066","type":"LinearAxis"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"89136","type":"Span"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"89074"},{"id":"89075"},{"id":"89076"},{"id":"89077"},{"id":"89078"},{"id":"89079"},{"id":"89080"},{"id":"89081"}]},"id":"89084","type":"Toolbar"},{"attributes":{"end":1,"start":-0.05},"id":"89060","type":"DataRange1d"},{"attributes":{},"id":"89170","type":"BasicTickFormatter"},{"attributes":{},"id":"89094","type":"DataRange1d"},{"attributes":{"overlay":{"id":"89082"}},"id":"89076","type":"BoxZoomTool"},{"attributes":{},"id":"89075","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"89118","type":"BoxAnnotation"},{"attributes":{},"id":"89158","type":"BasicTickFormatter"},{"attributes":{},"id":"89074","type":"ResetTool"},{"attributes":{},"id":"89080","type":"SaveTool"},{"attributes":{},"id":"89077","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"89083"}},"id":"89078","type":"LassoSelectTool"},{"attributes":{},"id":"89071","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"89110"},{"id":"89111"},{"id":"89112"},{"id":"89113"},{"id":"89114"},{"id":"89115"},{"id":"89116"},{"id":"89117"}]},"id":"89120","type":"Toolbar"},{"attributes":{},"id":"89174","type":"UnionRenderers"},{"attributes":{},"id":"89175","type":"Selection"},{"attributes":{},"id":"89160","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"89119","type":"PolyAnnotation"},{"attributes":{},"id":"89116","type":"SaveTool"},{"attributes":{"callback":null},"id":"89117","type":"HoverTool"},{"attributes":{"below":[{"id":"89066"}],"center":[{"id":"89069"},{"id":"89073"}],"left":[{"id":"89070"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"89132"},{"id":"89134"},{"id":"89135"},{"id":"89136"},{"id":"89139"}],"title":{"id":"89141"},"toolbar":{"id":"89084"},"toolbar_location":null,"x_range":{"id":"89058"},"x_scale":{"id":"89062"},"y_range":{"id":"89060"},"y_scale":{"id":"89064"}},"id":"89057","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89130","type":"Circle"},{"attributes":{},"id":"89176","type":"UnionRenderers"},{"attributes":{},"id":"89177","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"89082","type":"BoxAnnotation"},{"attributes":{},"id":"89162","type":"UnionRenderers"},{"attributes":{},"id":"89163","type":"Selection"},{"attributes":{},"id":"89058","type":"DataRange1d"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"89165"},"selection_policy":{"id":"89164"}},"id":"89138","type":"ColumnDataSource"},{"attributes":{},"id":"89164","type":"UnionRenderers"},{"attributes":{"source":{"id":"89129"}},"id":"89133","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"89083","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"89144","type":"Circle"},{"attributes":{"axis":{"id":"89066"},"ticker":null},"id":"89069","type":"Grid"},{"attributes":{"data_source":{"id":"89129"},"glyph":{"id":"89130"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"89131"},"selection_glyph":null,"view":{"id":"89133"}},"id":"89132","type":"GlyphRenderer"},{"attributes":{},"id":"89165","type":"Selection"},{"attributes":{"source":{"id":"89138"}},"id":"89140","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"89137","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238711},"id":"89134","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.17824444314769777},"id":"89135","type":"Span"},{"attributes":{"data_source":{"id":"89138"},"glyph":{"id":"89137"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"89140"}},"id":"89139","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"89057"},0,0],[{"id":"89093"},0,1]]},"id":"89181","type":"GridBox"},{"attributes":{"text":"tau"},"id":"89141","type":"Title"},{"attributes":{"toolbars":[{"id":"89084"},{"id":"89120"}],"tools":[{"id":"89074"},{"id":"89075"},{"id":"89076"},{"id":"89077"},{"id":"89078"},{"id":"89079"},{"id":"89080"},{"id":"89081"},{"id":"89110"},{"id":"89111"},{"id":"89112"},{"id":"89113"},{"id":"89114"},{"id":"89115"},{"id":"89116"},{"id":"89117"}]},"id":"89182","type":"ProxyToolbar"}],"root_ids":["89184"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"6d8f6337-0e79-4472-9942-a941a3776773","root_ids":["89184"],"roots":{"89184":"74fff1d4-50ba-4893-b0cd-76d6dffec130"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();