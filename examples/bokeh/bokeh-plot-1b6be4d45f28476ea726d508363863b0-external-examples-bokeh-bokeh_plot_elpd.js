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
    
      
      
    
      var element = document.getElementById("aefa5ce3-6fd4-453e-93eb-5b8b8dda88ae");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'aefa5ce3-6fd4-453e-93eb-5b8b8dda88ae' but no matching script tag was found.")
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
                    
                  var docs_json = '{"848e6200-078e-4d07-ac3b-7c3873eb0f99":{"roots":{"references":[{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71228","type":"PolyAnnotation"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"71245"},"ticker":{"id":"71216"}},"id":"71215","type":"LinearAxis"},{"attributes":{"callback":null},"id":"71226","type":"HoverTool"},{"attributes":{},"id":"71209","type":"LinearScale"},{"attributes":{},"id":"71247","type":"BasicTickFormatter"},{"attributes":{},"id":"71220","type":"PanTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"71250"},"selection_policy":{"id":"71249"}},"id":"71239","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"71227"}},"id":"71221","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"71247"},"ticker":{"id":"71212"}},"id":"71211","type":"LinearAxis"},{"attributes":{},"id":"71219","type":"ResetTool"},{"attributes":{},"id":"71222","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"71239"},"glyph":{"id":"71238"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"71241"}},"id":"71240","type":"GlyphRenderer"},{"attributes":{},"id":"71249","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"71238","type":"Cross"},{"attributes":{"toolbar":{"id":"71255"},"toolbar_location":"above"},"id":"71256","type":"ToolbarBox"},{"attributes":{},"id":"71250","type":"Selection"},{"attributes":{"children":[[{"id":"71202"},0,0]]},"id":"71254","type":"GridBox"},{"attributes":{"axis":{"id":"71211"},"ticker":null},"id":"71214","type":"Grid"},{"attributes":{},"id":"71216","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"71229"}],"tools":[{"id":"71219"},{"id":"71220"},{"id":"71221"},{"id":"71222"},{"id":"71223"},{"id":"71224"},{"id":"71225"},{"id":"71226"}]},"id":"71255","type":"ProxyToolbar"},{"attributes":{},"id":"71212","type":"BasicTicker"},{"attributes":{},"id":"71224","type":"UndoTool"},{"attributes":{"axis":{"id":"71215"},"dimension":1,"ticker":null},"id":"71218","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71227","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"71256"},{"id":"71254"}]},"id":"71257","type":"Column"},{"attributes":{},"id":"71207","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71219"},{"id":"71220"},{"id":"71221"},{"id":"71222"},{"id":"71223"},{"id":"71224"},{"id":"71225"},{"id":"71226"}]},"id":"71229","type":"Toolbar"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"71242","type":"Title"},{"attributes":{"overlay":{"id":"71228"}},"id":"71223","type":"LassoSelectTool"},{"attributes":{},"id":"71203","type":"DataRange1d"},{"attributes":{"source":{"id":"71239"}},"id":"71241","type":"CDSView"},{"attributes":{},"id":"71205","type":"DataRange1d"},{"attributes":{"below":[{"id":"71211"}],"center":[{"id":"71214"},{"id":"71218"}],"left":[{"id":"71215"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"71240"}],"title":{"id":"71242"},"toolbar":{"id":"71229"},"toolbar_location":null,"x_range":{"id":"71203"},"x_scale":{"id":"71207"},"y_range":{"id":"71205"},"y_scale":{"id":"71209"}},"id":"71202","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71225","type":"SaveTool"},{"attributes":{},"id":"71245","type":"BasicTickFormatter"}],"root_ids":["71257"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"848e6200-078e-4d07-ac3b-7c3873eb0f99","root_ids":["71257"],"roots":{"71257":"aefa5ce3-6fd4-453e-93eb-5b8b8dda88ae"}}];
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