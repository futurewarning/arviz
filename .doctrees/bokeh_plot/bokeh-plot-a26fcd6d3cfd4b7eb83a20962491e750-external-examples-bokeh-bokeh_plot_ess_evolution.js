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
    
      
      
    
      var element = document.getElementById("a6ae3350-fde4-49cc-9224-ad4d0780387e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a6ae3350-fde4-49cc-9224-ad4d0780387e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9658f108-1d11-4a25-b8cb-3522de147311":{"roots":{"references":[{"attributes":{},"id":"71449","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71516"},"selection_policy":{"id":"71515"}},"id":"71493","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"71451"},"ticker":null},"id":"71454","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"71490","type":"Line"},{"attributes":{"source":{"id":"71488"}},"id":"71492","type":"CDSView"},{"attributes":{},"id":"71445","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71494","type":"Circle"},{"attributes":{"children":[[{"id":"71442"},0,0]]},"id":"71520","type":"GridBox"},{"attributes":{"axis":{"id":"71455"},"dimension":1,"ticker":null},"id":"71458","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71468","type":"PolyAnnotation"},{"attributes":{},"id":"71456","type":"BasicTicker"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"71481"},{"id":"71486"}]},"id":"71500","type":"LegendItem"},{"attributes":{"text":"b"},"id":"71502","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71480","type":"Circle"},{"attributes":{},"id":"71507","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"71493"},"glyph":{"id":"71494"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71495"},"selection_glyph":null,"view":{"id":"71497"}},"id":"71496","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"71467"}},"id":"71461","type":"BoxZoomTool"},{"attributes":{},"id":"71460","type":"PanTool"},{"attributes":{},"id":"71459","type":"ResetTool"},{"attributes":{"click_policy":"hide","items":[{"id":"71500"},{"id":"71501"}],"location":"center_right","orientation":"horizontal"},"id":"71499","type":"Legend"},{"attributes":{"children":[{"id":"71522"},{"id":"71520"}]},"id":"71523","type":"Column"},{"attributes":{},"id":"71465","type":"SaveTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"71496"},{"id":"71491"}]},"id":"71501","type":"LegendItem"},{"attributes":{},"id":"71462","type":"WheelZoomTool"},{"attributes":{},"id":"71443","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"71521"},"toolbar_location":"above"},"id":"71522","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"71468"}},"id":"71463","type":"LassoSelectTool"},{"attributes":{"above":[{"id":"71499"}],"below":[{"id":"71451"}],"center":[{"id":"71454"},{"id":"71458"}],"left":[{"id":"71455"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71481"},{"id":"71486"},{"id":"71491"},{"id":"71496"},{"id":"71498"}],"title":{"id":"71502"},"toolbar":{"id":"71469"},"toolbar_location":null,"x_range":{"id":"71443"},"x_scale":{"id":"71447"},"y_range":{"id":"71445"},"y_scale":{"id":"71449"}},"id":"71442","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71464","type":"UndoTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71479","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71459"},{"id":"71460"},{"id":"71461"},{"id":"71462"},{"id":"71463"},{"id":"71464"},{"id":"71465"},{"id":"71466"}]},"id":"71469","type":"Toolbar"},{"attributes":{},"id":"71513","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"71483"},"glyph":{"id":"71484"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71485"},"selection_glyph":null,"view":{"id":"71487"}},"id":"71486","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"71469"}],"tools":[{"id":"71459"},{"id":"71460"},{"id":"71461"},{"id":"71462"},{"id":"71463"},{"id":"71464"},{"id":"71465"},{"id":"71466"}]},"id":"71521","type":"ProxyToolbar"},{"attributes":{},"id":"71509","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71510"},"selection_policy":{"id":"71509"}},"id":"71478","type":"ColumnDataSource"},{"attributes":{},"id":"71510","type":"Selection"},{"attributes":{"source":{"id":"71478"}},"id":"71482","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"71484","type":"Line"},{"attributes":{},"id":"71512","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71512"},"selection_policy":{"id":"71511"}},"id":"71483","type":"ColumnDataSource"},{"attributes":{},"id":"71514","type":"Selection"},{"attributes":{"data_source":{"id":"71478"},"glyph":{"id":"71479"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71480"},"selection_glyph":null,"view":{"id":"71482"}},"id":"71481","type":"GlyphRenderer"},{"attributes":{},"id":"71511","type":"UnionRenderers"},{"attributes":{},"id":"71516","type":"Selection"},{"attributes":{"axis_label":"ESS","formatter":{"id":"71505"},"ticker":{"id":"71456"}},"id":"71455","type":"LinearAxis"},{"attributes":{},"id":"71515","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71495","type":"Circle"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"71507"},"ticker":{"id":"71452"}},"id":"71451","type":"LinearAxis"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"71498","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71514"},"selection_policy":{"id":"71513"}},"id":"71488","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71467","type":"BoxAnnotation"},{"attributes":{},"id":"71505","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"71485","type":"Line"},{"attributes":{},"id":"71447","type":"LinearScale"},{"attributes":{"source":{"id":"71483"}},"id":"71487","type":"CDSView"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"71489","type":"Line"},{"attributes":{},"id":"71452","type":"BasicTicker"},{"attributes":{"data_source":{"id":"71488"},"glyph":{"id":"71489"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71490"},"selection_glyph":null,"view":{"id":"71492"}},"id":"71491","type":"GlyphRenderer"},{"attributes":{"source":{"id":"71493"}},"id":"71497","type":"CDSView"},{"attributes":{"callback":null},"id":"71466","type":"HoverTool"}],"root_ids":["71523"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"9658f108-1d11-4a25-b8cb-3522de147311","root_ids":["71523"],"roots":{"71523":"a6ae3350-fde4-49cc-9224-ad4d0780387e"}}];
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