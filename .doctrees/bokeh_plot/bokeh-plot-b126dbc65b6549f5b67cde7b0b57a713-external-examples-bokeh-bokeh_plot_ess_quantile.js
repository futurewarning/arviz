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
    
      
      
    
      var element = document.getElementById("361519b0-8afe-4220-b332-dcf29d6b3720");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '361519b0-8afe-4220-b332-dcf29d6b3720' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ee438ed7-c214-491c-9ffd-ca83eb431503":{"roots":{"references":[{"attributes":{},"id":"71742","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"71729"},"glyph":{"id":"71730"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71731"},"selection_glyph":null,"view":{"id":"71733"}},"id":"71732","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"71738"},"ticker":{"id":"71707"}},"id":"71706","type":"LinearAxis"},{"attributes":{"text":"sigma"},"id":"71735","type":"Title"},{"attributes":{},"id":"71743","type":"Selection"},{"attributes":{"toolbars":[{"id":"71720"}],"tools":[{"id":"71710"},{"id":"71711"},{"id":"71712"},{"id":"71713"},{"id":"71714"},{"id":"71715"},{"id":"71716"},{"id":"71717"}]},"id":"71748","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"71693"},0,0]]},"id":"71747","type":"GridBox"},{"attributes":{},"id":"71696","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71718","type":"BoxAnnotation"},{"attributes":{},"id":"71698","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"71740"},"ticker":{"id":"71703"}},"id":"71702","type":"LinearAxis"},{"attributes":{},"id":"71703","type":"BasicTicker"},{"attributes":{"callback":null},"id":"71717","type":"HoverTool"},{"attributes":{},"id":"71700","type":"LinearScale"},{"attributes":{"axis":{"id":"71702"},"ticker":null},"id":"71705","type":"Grid"},{"attributes":{"axis":{"id":"71706"},"dimension":1,"ticker":null},"id":"71709","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71719","type":"PolyAnnotation"},{"attributes":{},"id":"71738","type":"BasicTickFormatter"},{"attributes":{},"id":"71707","type":"BasicTicker"},{"attributes":{"below":[{"id":"71702"}],"center":[{"id":"71705"},{"id":"71709"}],"left":[{"id":"71706"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"71732"},{"id":"71734"}],"title":{"id":"71735"},"toolbar":{"id":"71720"},"toolbar_location":null,"x_range":{"id":"71694"},"x_scale":{"id":"71698"},"y_range":{"id":"71696"},"y_scale":{"id":"71700"}},"id":"71693","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71731","type":"Circle"},{"attributes":{"overlay":{"id":"71718"}},"id":"71712","type":"BoxZoomTool"},{"attributes":{},"id":"71711","type":"PanTool"},{"attributes":{},"id":"71710","type":"ResetTool"},{"attributes":{},"id":"71716","type":"SaveTool"},{"attributes":{},"id":"71713","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"71719"}},"id":"71714","type":"LassoSelectTool"},{"attributes":{},"id":"71694","type":"DataRange1d"},{"attributes":{},"id":"71715","type":"UndoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71710"},{"id":"71711"},{"id":"71712"},{"id":"71713"},{"id":"71714"},{"id":"71715"},{"id":"71716"},{"id":"71717"}]},"id":"71720","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"71730","type":"Circle"},{"attributes":{},"id":"71740","type":"BasicTickFormatter"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"71734","type":"Span"},{"attributes":{"source":{"id":"71729"}},"id":"71733","type":"CDSView"},{"attributes":{"toolbar":{"id":"71748"},"toolbar_location":"above"},"id":"71749","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQDIUfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1AQsbCePPwnkB7Du/cq5qgQH8ihBoHoKBAh58qLZB5oECYlOwhLnyfQFgCvMP22p1AysGm42rqnEA6InuU09KdQLKWYY7d25xA+A/0ZSlsnEBpLBEly1mdQPcF40OedZlAEC7heDC7m0AxB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"71743"},"selection_policy":{"id":"71742"}},"id":"71729","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"71749"},{"id":"71747"}]},"id":"71750","type":"Column"}],"root_ids":["71750"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"ee438ed7-c214-491c-9ffd-ca83eb431503","root_ids":["71750"],"roots":{"71750":"361519b0-8afe-4220-b332-dcf29d6b3720"}}];
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