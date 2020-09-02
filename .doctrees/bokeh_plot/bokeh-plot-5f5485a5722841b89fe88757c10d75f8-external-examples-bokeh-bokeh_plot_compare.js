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
    
      
      
    
      var element = document.getElementById("13ba9c9d-b122-4747-8bd9-6cd3e1a7208b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '13ba9c9d-b122-4747-8bd9-6cd3e1a7208b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"abbd6018-5404-4f06-9a50-5ca833cc3d6c":{"roots":{"references":[{"attributes":{"children":[[{"id":"69016"},0,0]]},"id":"69098","type":"GridBox"},{"attributes":{"source":{"id":"69054"}},"id":"69058","type":"CDSView"},{"attributes":{"overlay":{"id":"69041"}},"id":"69035","type":"BoxZoomTool"},{"attributes":{},"id":"69087","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"69041","type":"BoxAnnotation"},{"attributes":{"source":{"id":"69059"}},"id":"69063","type":"CDSView"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"69052","type":"FixedTicker"},{"attributes":{"data_source":{"id":"69069"},"glyph":{"id":"69070"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69071"},"selection_glyph":null,"view":{"id":"69073"}},"id":"69072","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"69086"},"selection_policy":{"id":"69085"}},"id":"69054","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-32.04867801700555,-29.325902619774077],[-32.113931462266876,-29.506816890933223]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"69092"},"selection_policy":{"id":"69091"}},"id":"69069","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69065","type":"Circle"},{"attributes":{"callback":null},"id":"69040","type":"HoverTool"},{"attributes":{},"id":"69086","type":"Selection"},{"attributes":{},"id":"69088","type":"Selection"},{"attributes":{"data_source":{"id":"69074"},"glyph":{"id":"69075"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69076"},"selection_glyph":null,"view":{"id":"69078"}},"id":"69077","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"69082"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"69052"}},"id":"69029","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"69042","type":"PolyAnnotation"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"69090"},"selection_policy":{"id":"69089"}},"id":"69064","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"69099"},"toolbar_location":"above"},"id":"69100","type":"ToolbarBox"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69060","type":"MultiLine"},{"attributes":{"axis":{"id":"69029"},"dimension":1,"ticker":null},"id":"69032","type":"Grid"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69055","type":"Triangle"},{"attributes":{"source":{"id":"69064"}},"id":"69068","type":"CDSView"},{"attributes":{},"id":"69033","type":"ResetTool"},{"attributes":{"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"69094"},"selection_policy":{"id":"69093"}},"id":"69074","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"69054"},"glyph":{"id":"69055"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69056"},"selection_glyph":null,"view":{"id":"69058"}},"id":"69057","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"69059"},"glyph":{"id":"69060"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69061"},"selection_glyph":null,"view":{"id":"69063"}},"id":"69062","type":"GlyphRenderer"},{"attributes":{},"id":"69089","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"69042"}},"id":"69037","type":"LassoSelectTool"},{"attributes":{},"id":"69083","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Log","formatter":{"id":"69083"},"ticker":{"id":"69026"}},"id":"69025","type":"LinearAxis"},{"attributes":{"data_source":{"id":"69064"},"glyph":{"id":"69065"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69066"},"selection_glyph":null,"view":{"id":"69068"}},"id":"69067","type":"GlyphRenderer"},{"attributes":{},"id":"69023","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69033"},{"id":"69034"},{"id":"69035"},{"id":"69036"},{"id":"69037"},{"id":"69038"},{"id":"69039"},{"id":"69040"}]},"id":"69043","type":"Toolbar"},{"attributes":{"axis":{"id":"69025"},"ticker":null},"id":"69028","type":"Grid"},{"attributes":{"toolbars":[{"id":"69043"}],"tools":[{"id":"69033"},{"id":"69034"},{"id":"69035"},{"id":"69036"},{"id":"69037"},{"id":"69038"},{"id":"69039"},{"id":"69040"}]},"id":"69099","type":"ProxyToolbar"},{"attributes":{},"id":"69026","type":"BasicTicker"},{"attributes":{"source":{"id":"69069"}},"id":"69073","type":"CDSView"},{"attributes":{"source":{"id":"69074"}},"id":"69078","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69056","type":"Triangle"},{"attributes":{},"id":"69038","type":"UndoTool"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"69079","type":"Span"},{"attributes":{},"id":"69017","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69066","type":"Circle"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"69088"},"selection_policy":{"id":"69087"}},"id":"69059","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69071","type":"MultiLine"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69070","type":"MultiLine"},{"attributes":{"below":[{"id":"69025"}],"center":[{"id":"69028"},{"id":"69032"}],"left":[{"id":"69029"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"69057"},{"id":"69062"},{"id":"69067"},{"id":"69072"},{"id":"69077"},{"id":"69079"}],"title":{"id":"69081"},"toolbar":{"id":"69043"},"toolbar_location":null,"x_range":{"id":"69017"},"x_scale":{"id":"69021"},"y_range":{"id":"69019"},"y_scale":{"id":"69023"}},"id":"69016","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"69090","type":"Selection"},{"attributes":{"text":""},"id":"69081","type":"Title"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69075","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"69061","type":"MultiLine"},{"attributes":{},"id":"69039","type":"SaveTool"},{"attributes":{},"id":"69093","type":"UnionRenderers"},{"attributes":{},"id":"69092","type":"Selection"},{"attributes":{},"id":"69082","type":"BasicTickFormatter"},{"attributes":{},"id":"69094","type":"Selection"},{"attributes":{},"id":"69021","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"69076","type":"Circle"},{"attributes":{"end":0.5,"start":-1.5},"id":"69019","type":"DataRange1d"},{"attributes":{},"id":"69036","type":"WheelZoomTool"},{"attributes":{},"id":"69085","type":"UnionRenderers"},{"attributes":{},"id":"69034","type":"PanTool"},{"attributes":{},"id":"69091","type":"UnionRenderers"},{"attributes":{"children":[{"id":"69100"},{"id":"69098"}]},"id":"69101","type":"Column"}],"root_ids":["69101"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"abbd6018-5404-4f06-9a50-5ca833cc3d6c","root_ids":["69101"],"roots":{"69101":"13ba9c9d-b122-4747-8bd9-6cd3e1a7208b"}}];
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