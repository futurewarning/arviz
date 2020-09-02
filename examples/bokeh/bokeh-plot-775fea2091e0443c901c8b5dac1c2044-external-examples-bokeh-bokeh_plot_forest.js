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
    
      
      
    
      var element = document.getElementById("d6e523dd-6c82-42e9-8a84-80aeb165931a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd6e523dd-6c82-42e9-8a84-80aeb165931a' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c3a0ad1f-1b0e-400e-82ef-86a78b722e11":{"roots":{"references":[{"attributes":{},"id":"71997","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"71950"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"71947"}},"id":"71800","type":"LinearAxis"},{"attributes":{},"id":"71998","type":"Selection"},{"attributes":{"axis":{"id":"71796"},"ticker":null},"id":"71799","type":"Grid"},{"attributes":{},"id":"71983","type":"UnionRenderers"},{"attributes":{},"id":"71984","type":"Selection"},{"attributes":{},"id":"71999","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"71811","type":"HoverTool"},{"attributes":{},"id":"72000","type":"Selection"},{"attributes":{"below":[{"id":"71796"}],"center":[{"id":"71799"},{"id":"71803"}],"left":[{"id":"71800"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"71826"},{"id":"71831"},{"id":"71836"},{"id":"71841"},{"id":"71846"},{"id":"71851"},{"id":"71856"},{"id":"71861"},{"id":"71866"},{"id":"71871"},{"id":"71876"},{"id":"71881"},{"id":"71886"},{"id":"71891"},{"id":"71896"},{"id":"71901"},{"id":"71906"},{"id":"71911"},{"id":"71916"},{"id":"71921"},{"id":"71926"},{"id":"71931"},{"id":"71936"},{"id":"71941"}],"title":{"id":"71943"},"toolbar":{"id":"71814"},"toolbar_location":null,"x_range":{"id":"71945"},"x_scale":{"id":"71792"},"y_range":{"id":"71946"},"y_scale":{"id":"71794"}},"id":"71787","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71985","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"71951"},"ticker":{"id":"71797"}},"id":"71796","type":"LinearAxis"},{"attributes":{},"id":"71986","type":"Selection"},{"attributes":{"children":[[{"id":"71787"},0,0]]},"id":"72004","type":"GridBox"},{"attributes":{},"id":"71797","type":"BasicTicker"},{"attributes":{},"id":"71794","type":"LinearScale"},{"attributes":{},"id":"71987","type":"UnionRenderers"},{"attributes":{"axis":{"id":"71800"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"71803","type":"Grid"},{"attributes":{},"id":"71988","type":"Selection"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"71954"},"selection_policy":{"id":"71953"}},"id":"71823","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"71812"}},"id":"71806","type":"BoxZoomTool"},{"attributes":{},"id":"71805","type":"PanTool"},{"attributes":{},"id":"71804","type":"ResetTool"},{"attributes":{},"id":"71810","type":"SaveTool"},{"attributes":{},"id":"71807","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"71813"}},"id":"71808","type":"LassoSelectTool"},{"attributes":{},"id":"71809","type":"UndoTool"},{"attributes":{},"id":"71989","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"71804"},{"id":"71805"},{"id":"71806"},{"id":"71807"},{"id":"71808"},{"id":"71809"},{"id":"71810"},{"id":"71811"}]},"id":"71814","type":"Toolbar"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"71956"},"selection_policy":{"id":"71955"}},"id":"71828","type":"ColumnDataSource"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"71946","type":"DataRange1d"},{"attributes":{},"id":"71990","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71829","type":"Line"},{"attributes":{"children":[{"id":"72006"},{"id":"72004"}]},"id":"72007","type":"Column"},{"attributes":{"data":{},"selected":{"id":"71958"},"selection_policy":{"id":"71957"}},"id":"71833","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71830","type":"Line"},{"attributes":{"data_source":{"id":"71828"},"glyph":{"id":"71829"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71830"},"selection_glyph":null,"view":{"id":"71832"}},"id":"71831","type":"GlyphRenderer"},{"attributes":{"source":{"id":"71823"}},"id":"71827","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"71834","type":"Circle"},{"attributes":{},"id":"71991","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71824","type":"Line"},{"attributes":{},"id":"71992","type":"Selection"},{"attributes":{"data_source":{"id":"71823"},"glyph":{"id":"71824"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71825"},"selection_glyph":null,"view":{"id":"71827"}},"id":"71826","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71825","type":"Line"},{"attributes":{"source":{"id":"71828"}},"id":"71832","type":"CDSView"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"71972"},"selection_policy":{"id":"71971"}},"id":"71868","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"71812","type":"BoxAnnotation"},{"attributes":{},"id":"71993","type":"UnionRenderers"},{"attributes":{},"id":"71994","type":"Selection"},{"attributes":{"text":"94.0% HDI"},"id":"71943","type":"Title"},{"attributes":{"data_source":{"id":"71923"},"glyph":{"id":"71924"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71925"},"selection_glyph":null,"view":{"id":"71927"}},"id":"71926","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"71960"},"selection_policy":{"id":"71959"}},"id":"71838","type":"ColumnDataSource"},{"attributes":{},"id":"71950","type":"BasicTickFormatter"},{"attributes":{},"id":"71995","type":"UnionRenderers"},{"attributes":{"source":{"id":"71923"}},"id":"71927","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"71813","type":"PolyAnnotation"},{"attributes":{},"id":"71996","type":"Selection"},{"attributes":{},"id":"71951","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"71865","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71930","type":"Line"},{"attributes":{},"id":"71982","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71869","type":"Line"},{"attributes":{"source":{"id":"71928"}},"id":"71932","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"71864","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71934","type":"Line"},{"attributes":{"source":{"id":"71858"}},"id":"71862","type":"CDSView"},{"attributes":{},"id":"71981","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"71933"},"glyph":{"id":"71934"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71935"},"selection_glyph":null,"view":{"id":"71937"}},"id":"71936","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71860","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"71940","type":"Circle"},{"attributes":{"data_source":{"id":"71873"},"glyph":{"id":"71874"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71875"},"selection_glyph":null,"view":{"id":"71877"}},"id":"71876","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"71939","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"71970"},"selection_policy":{"id":"71969"}},"id":"71863","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"71998"},"selection_policy":{"id":"71997"}},"id":"71933","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"71978"},"selection_policy":{"id":"71977"}},"id":"71883","type":"ColumnDataSource"},{"attributes":{"source":{"id":"71933"}},"id":"71937","type":"CDSView"},{"attributes":{"data_source":{"id":"71863"},"glyph":{"id":"71864"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71865"},"selection_glyph":null,"view":{"id":"71867"}},"id":"71866","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71935","type":"Line"},{"attributes":{},"id":"71953","type":"UnionRenderers"},{"attributes":{"source":{"id":"71863"}},"id":"71867","type":"CDSView"},{"attributes":{},"id":"71980","type":"Selection"},{"attributes":{"data_source":{"id":"71883"},"glyph":{"id":"71884"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71885"},"selection_glyph":null,"view":{"id":"71887"}},"id":"71886","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"71814"}],"tools":[{"id":"71804"},{"id":"71805"},{"id":"71806"},{"id":"71807"},{"id":"71808"},{"id":"71809"},{"id":"71810"},{"id":"71811"}]},"id":"72005","type":"ProxyToolbar"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71874","type":"Line"},{"attributes":{},"id":"71954","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71839","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71884","type":"Line"},{"attributes":{"data":{},"selected":{"id":"72000"},"selection_policy":{"id":"71999"}},"id":"71938","type":"ColumnDataSource"},{"attributes":{"source":{"id":"71868"}},"id":"71872","type":"CDSView"},{"attributes":{},"id":"71979","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"71938"},"glyph":{"id":"71939"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71940"},"selection_glyph":null,"view":{"id":"71942"}},"id":"71941","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71870","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"71835","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"71880","type":"Circle"},{"attributes":{"source":{"id":"71938"}},"id":"71942","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"71879","type":"Circle"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"71974"},"selection_policy":{"id":"71973"}},"id":"71873","type":"ColumnDataSource"},{"attributes":{"source":{"id":"71873"}},"id":"71877","type":"CDSView"},{"attributes":{},"id":"71955","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71875","type":"Line"},{"attributes":{},"id":"71978","type":"Selection"},{"attributes":{},"id":"71956","type":"Selection"},{"attributes":{"data_source":{"id":"71888"},"glyph":{"id":"71889"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71890"},"selection_glyph":null,"view":{"id":"71892"}},"id":"71891","type":"GlyphRenderer"},{"attributes":{},"id":"71977","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"71976"},"selection_policy":{"id":"71975"}},"id":"71878","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"71984"},"selection_policy":{"id":"71983"}},"id":"71898","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"71878"},"glyph":{"id":"71879"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71880"},"selection_glyph":null,"view":{"id":"71882"}},"id":"71881","type":"GlyphRenderer"},{"attributes":{"source":{"id":"71878"}},"id":"71882","type":"CDSView"},{"attributes":{"data_source":{"id":"71898"},"glyph":{"id":"71899"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71900"},"selection_glyph":null,"view":{"id":"71902"}},"id":"71901","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71889","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71899","type":"Line"},{"attributes":{},"id":"71957","type":"UnionRenderers"},{"attributes":{"source":{"id":"71883"}},"id":"71887","type":"CDSView"},{"attributes":{},"id":"71976","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71885","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"71895","type":"Circle"},{"attributes":{},"id":"71958","type":"Selection"},{"attributes":{},"id":"71975","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"71894","type":"Circle"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"71980"},"selection_policy":{"id":"71979"}},"id":"71888","type":"ColumnDataSource"},{"attributes":{"source":{"id":"71888"}},"id":"71892","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71890","type":"Line"},{"attributes":{"data_source":{"id":"71903"},"glyph":{"id":"71904"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71905"},"selection_glyph":null,"view":{"id":"71907"}},"id":"71906","type":"GlyphRenderer"},{"attributes":{},"id":"71959","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"71982"},"selection_policy":{"id":"71981"}},"id":"71893","type":"ColumnDataSource"},{"attributes":{},"id":"71974","type":"Selection"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"71990"},"selection_policy":{"id":"71989"}},"id":"71913","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"71893"},"glyph":{"id":"71894"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71895"},"selection_glyph":null,"view":{"id":"71897"}},"id":"71896","type":"GlyphRenderer"},{"attributes":{},"id":"71960","type":"Selection"},{"attributes":{"source":{"id":"71893"}},"id":"71897","type":"CDSView"},{"attributes":{},"id":"71973","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"71913"},"glyph":{"id":"71914"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71915"},"selection_glyph":null,"view":{"id":"71917"}},"id":"71916","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71904","type":"Line"},{"attributes":{"data_source":{"id":"71843"},"glyph":{"id":"71844"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71845"},"selection_glyph":null,"view":{"id":"71847"}},"id":"71846","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71914","type":"Line"},{"attributes":{"source":{"id":"71898"}},"id":"71902","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71900","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"71910","type":"Circle"},{"attributes":{},"id":"71961","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"71909","type":"Circle"},{"attributes":{},"id":"71972","type":"Selection"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"71966"},"selection_policy":{"id":"71965"}},"id":"71853","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"71986"},"selection_policy":{"id":"71985"}},"id":"71903","type":"ColumnDataSource"},{"attributes":{"source":{"id":"71903"}},"id":"71907","type":"CDSView"},{"attributes":{},"id":"71962","type":"Selection"},{"attributes":{"data_source":{"id":"71833"},"glyph":{"id":"71834"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71835"},"selection_glyph":null,"view":{"id":"71837"}},"id":"71836","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71905","type":"Line"},{"attributes":{},"id":"71971","type":"UnionRenderers"},{"attributes":{"source":{"id":"71833"}},"id":"71837","type":"CDSView"},{"attributes":{"data_source":{"id":"71853"},"glyph":{"id":"71854"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71855"},"selection_glyph":null,"view":{"id":"71857"}},"id":"71856","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"71918"},"glyph":{"id":"71919"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71920"},"selection_glyph":null,"view":{"id":"71922"}},"id":"71921","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71844","type":"Line"},{"attributes":{"toolbar":{"id":"72005"},"toolbar_location":"above"},"id":"72006","type":"ToolbarBox"},{"attributes":{"data":{},"selected":{"id":"71988"},"selection_policy":{"id":"71987"}},"id":"71908","type":"ColumnDataSource"},{"attributes":{"source":{"id":"71838"}},"id":"71842","type":"CDSView"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"71996"},"selection_policy":{"id":"71995"}},"id":"71928","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"71908"},"glyph":{"id":"71909"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71910"},"selection_glyph":null,"view":{"id":"71912"}},"id":"71911","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71840","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"71850","type":"Circle"},{"attributes":{"source":{"id":"71908"}},"id":"71912","type":"CDSView"},{"attributes":{},"id":"71963","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"71928"},"glyph":{"id":"71929"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71930"},"selection_glyph":null,"view":{"id":"71932"}},"id":"71931","type":"GlyphRenderer"},{"attributes":{},"id":"71970","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"71849","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71919","type":"Line"},{"attributes":{"bounds":"auto","min_interval":1},"id":"71945","type":"DataRange1d"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"71962"},"selection_policy":{"id":"71961"}},"id":"71843","type":"ColumnDataSource"},{"attributes":{},"id":"71964","type":"Selection"},{"attributes":{"source":{"id":"71843"}},"id":"71847","type":"CDSView"},{"attributes":{"source":{"id":"71913"}},"id":"71917","type":"CDSView"},{"attributes":{},"id":"71969","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71845","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71915","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71854","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"71925","type":"Circle"},{"attributes":{"data_source":{"id":"71868"},"glyph":{"id":"71869"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71870"},"selection_glyph":null,"view":{"id":"71872"}},"id":"71871","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"71924","type":"Circle"},{"attributes":{"data_source":{"id":"71838"},"glyph":{"id":"71839"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71840"},"selection_glyph":null,"view":{"id":"71842"}},"id":"71841","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"71964"},"selection_policy":{"id":"71963"}},"id":"71848","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"71992"},"selection_policy":{"id":"71991"}},"id":"71918","type":"ColumnDataSource"},{"attributes":{"source":{"id":"71918"}},"id":"71922","type":"CDSView"},{"attributes":{"data_source":{"id":"71848"},"glyph":{"id":"71849"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71850"},"selection_glyph":null,"view":{"id":"71852"}},"id":"71851","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71920","type":"Line"},{"attributes":{},"id":"71965","type":"UnionRenderers"},{"attributes":{"source":{"id":"71848"}},"id":"71852","type":"CDSView"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"71947","type":"FixedTicker"},{"attributes":{},"id":"71968","type":"Selection"},{"attributes":{},"id":"71792","type":"LinearScale"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"71968"},"selection_policy":{"id":"71967"}},"id":"71858","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"71858"},"glyph":{"id":"71859"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"71860"},"selection_glyph":null,"view":{"id":"71862"}},"id":"71861","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71929","type":"Line"},{"attributes":{},"id":"71966","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"71994"},"selection_policy":{"id":"71993"}},"id":"71923","type":"ColumnDataSource"},{"attributes":{},"id":"71967","type":"UnionRenderers"},{"attributes":{"source":{"id":"71853"}},"id":"71857","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"71855","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"71859","type":"Line"}],"root_ids":["72007"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"c3a0ad1f-1b0e-400e-82ef-86a78b722e11","root_ids":["72007"],"roots":{"72007":"d6e523dd-6c82-42e9-8a84-80aeb165931a"}}];
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