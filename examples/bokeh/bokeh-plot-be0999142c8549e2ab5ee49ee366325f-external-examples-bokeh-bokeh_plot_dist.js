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
    
      
      
    
      var element = document.getElementById("03feadf3-7cc8-41c8-8869-7a7117f50ec4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '03feadf3-7cc8-41c8-8869-7a7117f50ec4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c5388e4c-815c-4cd5-8928-549a089c0d95":{"roots":{"references":[{"attributes":{},"id":"71047","type":"DataRange1d"},{"attributes":{"formatter":{"id":"71115"},"ticker":{"id":"71060"}},"id":"71059","type":"LinearAxis"},{"attributes":{"text":""},"id":"71133","type":"Title"},{"attributes":{"axis":{"id":"71090"},"dimension":1,"ticker":null},"id":"71093","type":"Grid"},{"attributes":{},"id":"71117","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"71124"},"glyph":{"id":"71125"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71126"},"selection_glyph":null,"view":{"id":"71128"}},"id":"71127","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"71146"},"selection_policy":{"id":"71145"}},"id":"71124","type":"ColumnDataSource"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"71111"}]},"id":"71123","type":"LegendItem"},{"attributes":{},"id":"71094","type":"PanTool"},{"attributes":{},"id":"71146","type":"Selection"},{"attributes":{},"id":"71095","type":"WheelZoomTool"},{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"71125","type":"Line"},{"attributes":{"formatter":{"id":"71117"},"ticker":{"id":"71056"}},"id":"71055","type":"LinearAxis"},{"attributes":{"below":[{"id":"71086"}],"center":[{"id":"71089"},{"id":"71093"}],"left":[{"id":"71090"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71127"}],"title":{"id":"71133"},"toolbar":{"id":"71101"},"x_range":{"id":"71078"},"x_scale":{"id":"71082"},"y_range":{"id":"71080"},"y_scale":{"id":"71084"}},"id":"71077","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"71108"}},"id":"71112","type":"CDSView"},{"attributes":{"formatter":{"id":"71140"},"ticker":{"id":"71087"}},"id":"71086","type":"LinearAxis"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"71109","type":"Quad"},{"attributes":{},"id":"71120","type":"Selection"},{"attributes":{},"id":"71049","type":"DataRange1d"},{"attributes":{"source":{"id":"71124"}},"id":"71128","type":"CDSView"},{"attributes":{"axis":{"id":"71059"},"dimension":1,"ticker":null},"id":"71062","type":"Grid"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"71110","type":"Quad"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"/Knx0k1ikD8j2/l+ary0P39qvHSTGMQ/ObTIdr6fyj8Sg8DKoUXGP8P1KFyPwsU/WmQ730+Ntz9KDAIrhxapPxkEVg4tsp0//Knx0k1ikD97FK5H4Xp0P/yp8dJNYlA//Knx0k1iYD8=","dtype":"float64","order":"little","shape":[13]}},"selected":{"id":"71120"},"selection_policy":{"id":"71119"}},"id":"71108","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"71086"},"ticker":null},"id":"71089","type":"Grid"},{"attributes":{"children":[{"id":"71046"},{"id":"71077"}]},"id":"71129","type":"Row"},{"attributes":{"below":[{"id":"71055"}],"center":[{"id":"71058"},{"id":"71062"},{"id":"71122"}],"left":[{"id":"71059"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71111"}],"title":{"id":"71114"},"toolbar":{"id":"71070"},"x_range":{"id":"71047"},"x_scale":{"id":"71051"},"y_range":{"id":"71049"},"y_scale":{"id":"71053"}},"id":"71046","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71115","type":"BasicTickFormatter"},{"attributes":{},"id":"71063","type":"PanTool"},{"attributes":{},"id":"71099","type":"HelpTool"},{"attributes":{},"id":"71087","type":"BasicTicker"},{"attributes":{},"id":"71056","type":"BasicTicker"},{"attributes":{},"id":"71119","type":"UnionRenderers"},{"attributes":{},"id":"71067","type":"ResetTool"},{"attributes":{},"id":"71138","type":"BasicTickFormatter"},{"attributes":{},"id":"71068","type":"HelpTool"},{"attributes":{},"id":"71097","type":"SaveTool"},{"attributes":{},"id":"71082","type":"LinearScale"},{"attributes":{},"id":"71078","type":"DataRange1d"},{"attributes":{"overlay":{"id":"71100"}},"id":"71096","type":"BoxZoomTool"},{"attributes":{},"id":"71145","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"71069"}},"id":"71065","type":"BoxZoomTool"},{"attributes":{},"id":"71098","type":"ResetTool"},{"attributes":{},"id":"71080","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71100","type":"BoxAnnotation"},{"attributes":{},"id":"71091","type":"BasicTicker"},{"attributes":{},"id":"71066","type":"SaveTool"},{"attributes":{"formatter":{"id":"71138"},"ticker":{"id":"71091"}},"id":"71090","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"71126","type":"Line"},{"attributes":{},"id":"71140","type":"BasicTickFormatter"},{"attributes":{"items":[{"id":"71123"}]},"id":"71122","type":"Legend"},{"attributes":{},"id":"71084","type":"LinearScale"},{"attributes":{"data_source":{"id":"71108"},"glyph":{"id":"71109"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71110"},"selection_glyph":null,"view":{"id":"71112"}},"id":"71111","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"71055"},"ticker":null},"id":"71058","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71063"},{"id":"71064"},{"id":"71065"},{"id":"71066"},{"id":"71067"},{"id":"71068"}]},"id":"71070","type":"Toolbar"},{"attributes":{},"id":"71051","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71069","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71094"},{"id":"71095"},{"id":"71096"},{"id":"71097"},{"id":"71098"},{"id":"71099"}]},"id":"71101","type":"Toolbar"},{"attributes":{},"id":"71064","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"71114","type":"Title"},{"attributes":{},"id":"71060","type":"BasicTicker"},{"attributes":{},"id":"71053","type":"LinearScale"}],"root_ids":["71129"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"c5388e4c-815c-4cd5-8928-549a089c0d95","root_ids":["71129"],"roots":{"71129":"03feadf3-7cc8-41c8-8869-7a7117f50ec4"}}];
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