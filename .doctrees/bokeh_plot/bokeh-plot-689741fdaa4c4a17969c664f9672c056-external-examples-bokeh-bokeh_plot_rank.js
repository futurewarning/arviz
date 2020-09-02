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
    
      
      
    
      var element = document.getElementById("c5e5b2d8-9b5a-4fb7-85b3-cdbb39b5e581");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c5e5b2d8-9b5a-4fb7-85b3-cdbb39b5e581' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8891db22-b921-476f-9521-9c7039e1d85b":{"roots":{"references":[{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"93689","type":"Span"},{"attributes":{"source":{"id":"93656"}},"id":"93660","type":"CDSView"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"93677","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93686","type":"VBar"},{"attributes":{"data_source":{"id":"93684"},"glyph":{"id":"93685"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93686"},"selection_glyph":null,"view":{"id":"93688"}},"id":"93687","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"93599"}},"id":"93593","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"93724"},"selection_policy":{"id":"93723"}},"id":"93684","type":"ColumnDataSource"},{"attributes":{"source":{"id":"93684"}},"id":"93688","type":"CDSView"},{"attributes":{},"id":"93618","type":"BasicTicker"},{"attributes":{"source":{"id":"93678"}},"id":"93682","type":"CDSView"},{"attributes":{"axis":{"id":"93617"},"ticker":null},"id":"93620","type":"Grid"},{"attributes":{},"id":"93625","type":"ResetTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93679","type":"VBar"},{"attributes":{},"id":"93701","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Chain","formatter":{"id":"93716"},"ticker":{"id":"93696"}},"id":"93621","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"93722"},"selection_policy":{"id":"93721"}},"id":"93678","type":"ColumnDataSource"},{"attributes":{},"id":"93575","type":"DataRange1d"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93685","type":"VBar"},{"attributes":{},"id":"93631","type":"SaveTool"},{"attributes":{"data_source":{"id":"93672"},"glyph":{"id":"93673"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93674"},"selection_glyph":null,"view":{"id":"93676"}},"id":"93675","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"93717"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"93618"}},"id":"93617","type":"LinearAxis"},{"attributes":{"overlay":{"id":"93633"}},"id":"93627","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93680","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93645","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93673","type":"VBar"},{"attributes":{},"id":"93592","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"93634","type":"PolyAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"93720"},"selection_policy":{"id":"93719"}},"id":"93672","type":"ColumnDataSource"},{"attributes":{},"id":"93626","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93674","type":"VBar"},{"attributes":{},"id":"93725","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93625"},{"id":"93626"},{"id":"93627"},{"id":"93628"},{"id":"93629"},{"id":"93630"},{"id":"93631"},{"id":"93632"}]},"id":"93635","type":"Toolbar"},{"attributes":{},"id":"93615","type":"LinearScale"},{"attributes":{},"id":"93613","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"93667","type":"Span"},{"attributes":{"axis":{"id":"93621"},"dimension":1,"ticker":null},"id":"93624","type":"Grid"},{"attributes":{"below":[{"id":"93583"}],"center":[{"id":"93586"},{"id":"93590"},{"id":"93649"},{"id":"93655"},{"id":"93661"},{"id":"93667"}],"left":[{"id":"93587"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"93647"},{"id":"93653"},{"id":"93659"},{"id":"93665"}],"title":{"id":"93670"},"toolbar":{"id":"93601"},"toolbar_location":null,"x_range":{"id":"93575"},"x_scale":{"id":"93579"},"y_range":{"id":"93577"},"y_scale":{"id":"93581"}},"id":"93574","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"93662"},"glyph":{"id":"93663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93664"},"selection_glyph":null,"view":{"id":"93666"}},"id":"93665","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"93731"},"toolbar_location":"above"},"id":"93732","type":"ToolbarBox"},{"attributes":{"ticks":[0,1,2,3]},"id":"93696","type":"FixedTicker"},{"attributes":{"data_source":{"id":"93678"},"glyph":{"id":"93679"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93680"},"selection_glyph":null,"view":{"id":"93682"}},"id":"93681","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"93683","type":"Span"},{"attributes":{"source":{"id":"93662"}},"id":"93666","type":"CDSView"},{"attributes":{},"id":"93591","type":"ResetTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93664","type":"VBar"},{"attributes":{"data_source":{"id":"93656"},"glyph":{"id":"93657"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93658"},"selection_glyph":null,"view":{"id":"93660"}},"id":"93659","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"93574"},0,0],[{"id":"93610"},0,1]]},"id":"93730","type":"GridBox"},{"attributes":{},"id":"93726","type":"Selection"},{"attributes":{"callback":null},"id":"93598","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"93709"},"selection_policy":{"id":"93708"}},"id":"93656","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"93617"}],"center":[{"id":"93620"},{"id":"93624"},{"id":"93677"},{"id":"93683"},{"id":"93689"},{"id":"93695"}],"left":[{"id":"93621"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"93675"},{"id":"93681"},{"id":"93687"},{"id":"93693"}],"title":{"id":"93698"},"toolbar":{"id":"93635"},"toolbar_location":null,"x_range":{"id":"93575"},"x_scale":{"id":"93613"},"y_range":{"id":"93577"},"y_scale":{"id":"93615"}},"id":"93610","subtype":"Figure","type":"Plot"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"93655","type":"Span"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"93661","type":"Span"},{"attributes":{},"id":"93716","type":"BasicTickFormatter"},{"attributes":{},"id":"93707","type":"Selection"},{"attributes":{"source":{"id":"93650"}},"id":"93654","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3]},"id":"93668","type":"FixedTicker"},{"attributes":{"source":{"id":"93672"}},"id":"93676","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"93711"},"selection_policy":{"id":"93710"}},"id":"93662","type":"ColumnDataSource"},{"attributes":{},"id":"93717","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93646","type":"VBar"},{"attributes":{},"id":"93719","type":"UnionRenderers"},{"attributes":{},"id":"93704","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"93632","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"93599","type":"BoxAnnotation"},{"attributes":{},"id":"93705","type":"Selection"},{"attributes":{"overlay":{"id":"93634"}},"id":"93629","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93652","type":"VBar"},{"attributes":{},"id":"93708","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"93644"},"glyph":{"id":"93645"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93646"},"selection_glyph":null,"view":{"id":"93648"}},"id":"93647","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"93707"},"selection_policy":{"id":"93706"}},"id":"93650","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93663","type":"VBar"},{"attributes":{"text":"tau"},"id":"93670","type":"Title"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93657","type":"VBar"},{"attributes":{},"id":"93584","type":"BasicTicker"},{"attributes":{},"id":"93720","type":"Selection"},{"attributes":{"children":[{"id":"93732"},{"id":"93730"}]},"id":"93733","type":"Column"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"93695","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93658","type":"VBar"},{"attributes":{"data_source":{"id":"93690"},"glyph":{"id":"93691"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93692"},"selection_glyph":null,"view":{"id":"93694"}},"id":"93693","type":"GlyphRenderer"},{"attributes":{},"id":"93711","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93591"},{"id":"93592"},{"id":"93593"},{"id":"93594"},{"id":"93595"},{"id":"93596"},{"id":"93597"},{"id":"93598"}]},"id":"93601","type":"Toolbar"},{"attributes":{"data_source":{"id":"93650"},"glyph":{"id":"93651"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93652"},"selection_glyph":null,"view":{"id":"93654"}},"id":"93653","type":"GlyphRenderer"},{"attributes":{},"id":"93723","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"93601"},{"id":"93635"}],"tools":[{"id":"93591"},{"id":"93592"},{"id":"93593"},{"id":"93594"},{"id":"93595"},{"id":"93596"},{"id":"93597"},{"id":"93598"},{"id":"93625"},{"id":"93626"},{"id":"93627"},{"id":"93628"},{"id":"93629"},{"id":"93630"},{"id":"93631"},{"id":"93632"}]},"id":"93731","type":"ProxyToolbar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"93702"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"93584"}},"id":"93583","type":"LinearAxis"},{"attributes":{},"id":"93597","type":"SaveTool"},{"attributes":{},"id":"93702","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93691","type":"VBar"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"93649","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"93600","type":"PolyAnnotation"},{"attributes":{},"id":"93724","type":"Selection"},{"attributes":{"source":{"id":"93644"}},"id":"93648","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"93633","type":"BoxAnnotation"},{"attributes":{},"id":"93710","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93692","type":"VBar"},{"attributes":{},"id":"93596","type":"UndoTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"93651","type":"VBar"},{"attributes":{},"id":"93579","type":"LinearScale"},{"attributes":{},"id":"93628","type":"WheelZoomTool"},{"attributes":{},"id":"93630","type":"UndoTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"93701"},"ticker":{"id":"93668"}},"id":"93587","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"93705"},"selection_policy":{"id":"93704"}},"id":"93644","type":"ColumnDataSource"},{"attributes":{},"id":"93594","type":"WheelZoomTool"},{"attributes":{"source":{"id":"93690"}},"id":"93694","type":"CDSView"},{"attributes":{},"id":"93577","type":"DataRange1d"},{"attributes":{},"id":"93706","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"93726"},"selection_policy":{"id":"93725"}},"id":"93690","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"93583"},"ticker":null},"id":"93586","type":"Grid"},{"attributes":{},"id":"93722","type":"Selection"},{"attributes":{},"id":"93709","type":"Selection"},{"attributes":{"axis":{"id":"93587"},"dimension":1,"ticker":null},"id":"93590","type":"Grid"},{"attributes":{"text":"mu"},"id":"93698","type":"Title"},{"attributes":{},"id":"93721","type":"UnionRenderers"},{"attributes":{},"id":"93581","type":"LinearScale"},{"attributes":{"overlay":{"id":"93600"}},"id":"93595","type":"LassoSelectTool"}],"root_ids":["93733"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"8891db22-b921-476f-9521-9c7039e1d85b","root_ids":["93733"],"roots":{"93733":"c5e5b2d8-9b5a-4fb7-85b3-cdbb39b5e581"}}];
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