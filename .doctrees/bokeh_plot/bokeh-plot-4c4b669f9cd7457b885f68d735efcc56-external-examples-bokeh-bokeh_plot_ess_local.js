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
    
      
      
    
      var element = document.getElementById("e46512d3-bf96-4868-a5c0-62c3f6832e69");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e46512d3-bf96-4868-a5c0-62c3f6832e69' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c44fe338-14bc-44e4-b31f-849442cc7882":{"roots":{"references":[{"attributes":{"children":[[{"id":"71584"},0,0]]},"id":"71645","type":"GridBox"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"71630","type":"Span"},{"attributes":{"data_source":{"id":"71626"},"glyph":{"id":"71625"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"71628"}},"id":"71627","type":"GlyphRenderer"},{"attributes":{},"id":"71589","type":"LinearScale"},{"attributes":{"source":{"id":"71626"}},"id":"71628","type":"CDSView"},{"attributes":{"data_source":{"id":"71620"},"glyph":{"id":"71621"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71622"},"selection_glyph":null,"view":{"id":"71624"}},"id":"71623","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71609","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"71629","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"71636"},"ticker":{"id":"71594"}},"id":"71593","type":"LinearAxis"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"71634"},"ticker":{"id":"71598"}},"id":"71597","type":"LinearAxis"},{"attributes":{},"id":"71638","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"71611"}],"tools":[{"id":"71601"},{"id":"71602"},{"id":"71603"},{"id":"71604"},{"id":"71605"},{"id":"71606"},{"id":"71607"},{"id":"71608"}]},"id":"71646","type":"ProxyToolbar"},{"attributes":{},"id":"71594","type":"BasicTicker"},{"attributes":{"callback":null},"id":"71608","type":"HoverTool"},{"attributes":{"text":"mu"},"id":"71631","type":"Title"},{"attributes":{},"id":"71591","type":"LinearScale"},{"attributes":{},"id":"71639","type":"Selection"},{"attributes":{"axis":{"id":"71593"},"ticker":null},"id":"71596","type":"Grid"},{"attributes":{"toolbar":{"id":"71646"},"toolbar_location":"above"},"id":"71647","type":"ToolbarBox"},{"attributes":{"axis":{"id":"71597"},"dimension":1,"ticker":null},"id":"71600","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71610","type":"PolyAnnotation"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"71625","type":"Dash"},{"attributes":{},"id":"71598","type":"BasicTicker"},{"attributes":{},"id":"71640","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71622","type":"Circle"},{"attributes":{"overlay":{"id":"71609"}},"id":"71603","type":"BoxZoomTool"},{"attributes":{},"id":"71602","type":"PanTool"},{"attributes":{},"id":"71641","type":"Selection"},{"attributes":{},"id":"71601","type":"ResetTool"},{"attributes":{},"id":"71607","type":"SaveTool"},{"attributes":{},"id":"71604","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"71610"}},"id":"71605","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71621","type":"Circle"},{"attributes":{},"id":"71606","type":"UndoTool"},{"attributes":{},"id":"71634","type":"BasicTickFormatter"},{"attributes":{},"id":"71587","type":"DataRange1d"},{"attributes":{"below":[{"id":"71593"}],"center":[{"id":"71596"},{"id":"71600"}],"left":[{"id":"71597"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71623"},{"id":"71627"},{"id":"71629"},{"id":"71630"}],"title":{"id":"71631"},"toolbar":{"id":"71611"},"toolbar_location":null,"x_range":{"id":"71585"},"x_scale":{"id":"71589"},"y_range":{"id":"71587"},"y_scale":{"id":"71591"}},"id":"71584","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71585","type":"DataRange1d"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"71641"},"selection_policy":{"id":"71640"}},"id":"71626","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71601"},{"id":"71602"},{"id":"71603"},{"id":"71604"},{"id":"71605"},{"id":"71606"},{"id":"71607"},{"id":"71608"}]},"id":"71611","type":"Toolbar"},{"attributes":{"source":{"id":"71620"}},"id":"71624","type":"CDSView"},{"attributes":{},"id":"71636","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"71647"},{"id":"71645"}]},"id":"71648","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71639"},"selection_policy":{"id":"71638"}},"id":"71620","type":"ColumnDataSource"}],"root_ids":["71648"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"c44fe338-14bc-44e4-b31f-849442cc7882","root_ids":["71648"],"roots":{"71648":"e46512d3-bf96-4868-a5c0-62c3f6832e69"}}];
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