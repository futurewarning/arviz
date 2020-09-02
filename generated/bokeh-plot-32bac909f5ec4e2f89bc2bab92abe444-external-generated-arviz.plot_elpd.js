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
    
      
      
    
      var element = document.getElementById("60861af6-9c85-4e35-8696-0b04160291ec");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '60861af6-9c85-4e35-8696-0b04160291ec' but no matching script tag was found.")
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
                    
                  var docs_json = '{"20abe31b-ca2d-41e2-b41e-baf3156b6fde":{"roots":{"references":[{"attributes":{"overlay":{"id":"103721"}},"id":"103715","type":"BoxZoomTool"},{"attributes":{},"id":"103699","type":"DataRange1d"},{"attributes":{},"id":"103713","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"103721","type":"BoxAnnotation"},{"attributes":{"source":{"id":"103733"}},"id":"103735","type":"CDSView"},{"attributes":{},"id":"103710","type":"BasicTicker"},{"attributes":{"text":"centered model - non centered model"},"id":"103736","type":"Title"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"103732","type":"Cross"},{"attributes":{"data_source":{"id":"103733"},"glyph":{"id":"103732"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"103735"}},"id":"103734","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"103705"},"ticker":null},"id":"103708","type":"Grid"},{"attributes":{"children":[[{"id":"103696"},0,0]]},"id":"103748","type":"GridBox"},{"attributes":{},"id":"103743","type":"UnionRenderers"},{"attributes":{"below":[{"id":"103705"}],"center":[{"id":"103708"},{"id":"103712"}],"left":[{"id":"103709"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"103734"}],"title":{"id":"103736"},"toolbar":{"id":"103723"},"toolbar_location":null,"x_range":{"id":"103697"},"x_scale":{"id":"103701"},"y_range":{"id":"103699"},"y_scale":{"id":"103703"}},"id":"103696","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"103703","type":"LinearScale"},{"attributes":{},"id":"103701","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"103723"}],"tools":[{"id":"103713"},{"id":"103714"},{"id":"103715"},{"id":"103716"},{"id":"103717"},{"id":"103718"},{"id":"103719"},{"id":"103720"}]},"id":"103749","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"103749"},"toolbar_location":"above"},"id":"103750","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"103713"},{"id":"103714"},{"id":"103715"},{"id":"103716"},{"id":"103717"},{"id":"103718"},{"id":"103719"},{"id":"103720"}]},"id":"103723","type":"Toolbar"},{"attributes":{},"id":"103716","type":"WheelZoomTool"},{"attributes":{},"id":"103741","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"103750"},{"id":"103748"}]},"id":"103751","type":"Column"},{"attributes":{},"id":"103739","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"103722","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"103720","type":"HoverTool"},{"attributes":{},"id":"103744","type":"Selection"},{"attributes":{"formatter":{"id":"103741"},"ticker":{"id":"103706"}},"id":"103705","type":"LinearAxis"},{"attributes":{"axis":{"id":"103709"},"dimension":1,"ticker":null},"id":"103712","type":"Grid"},{"attributes":{},"id":"103718","type":"UndoTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"103744"},"selection_policy":{"id":"103743"}},"id":"103733","type":"ColumnDataSource"},{"attributes":{},"id":"103697","type":"DataRange1d"},{"attributes":{},"id":"103719","type":"SaveTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"103739"},"ticker":{"id":"103710"}},"id":"103709","type":"LinearAxis"},{"attributes":{},"id":"103714","type":"PanTool"},{"attributes":{"overlay":{"id":"103722"}},"id":"103717","type":"LassoSelectTool"},{"attributes":{},"id":"103706","type":"BasicTicker"}],"root_ids":["103751"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"20abe31b-ca2d-41e2-b41e-baf3156b6fde","root_ids":["103751"],"roots":{"103751":"60861af6-9c85-4e35-8696-0b04160291ec"}}];
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