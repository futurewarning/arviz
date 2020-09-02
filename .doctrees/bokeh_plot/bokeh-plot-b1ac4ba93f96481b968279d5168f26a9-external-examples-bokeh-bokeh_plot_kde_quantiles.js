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
    
      
      
    
      var element = document.getElementById("afecb496-6251-4561-baac-c009d1075520");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'afecb496-6251-4561-baac-c009d1075520' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2a13c485-c294-435d-8e7a-8e1c3f2da4a7":{"roots":{"references":[{"attributes":{},"id":"73386","type":"UnionRenderers"},{"attributes":{"source":{"id":"73370"}},"id":"73374","type":"CDSView"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"73366","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"73377","type":"Patch"},{"attributes":{"callback":null},"id":"73348","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"73341"},{"id":"73342"},{"id":"73343"},{"id":"73344"},{"id":"73345"},{"id":"73346"},{"id":"73347"},{"id":"73348"}]},"id":"73351","type":"Toolbar"},{"attributes":{"source":{"id":"73375"}},"id":"73379","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[618]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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","dtype":"float64","order":"little","shape":[618]}},"selected":{"id":"73393"},"selection_policy":{"id":"73392"}},"id":"73375","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"73361","type":"Patch"},{"attributes":{},"id":"73387","type":"Selection"},{"attributes":{"children":[[{"id":"73324"},0,0]]},"id":"73397","type":"GridBox"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"73376","type":"Patch"},{"attributes":{},"id":"73390","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"73398"},"toolbar_location":"above"},"id":"73399","type":"ToolbarBox"},{"attributes":{"axis":{"id":"73333"},"ticker":null},"id":"73336","type":"Grid"},{"attributes":{},"id":"73338","type":"BasicTicker"},{"attributes":{"text":""},"id":"73381","type":"Title"},{"attributes":{},"id":"73391","type":"Selection"},{"attributes":{"data_source":{"id":"73375"},"glyph":{"id":"73376"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73377"},"selection_glyph":null,"view":{"id":"73379"}},"id":"73378","type":"GlyphRenderer"},{"attributes":{},"id":"73341","type":"ResetTool"},{"attributes":{},"id":"73344","type":"WheelZoomTool"},{"attributes":{},"id":"73329","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"73350","type":"PolyAnnotation"},{"attributes":{},"id":"73327","type":"DataRange1d"},{"attributes":{"children":[{"id":"73399"},{"id":"73397"}]},"id":"73400","type":"Column"},{"attributes":{"overlay":{"id":"73350"}},"id":"73345","type":"LassoSelectTool"},{"attributes":{},"id":"73392","type":"UnionRenderers"},{"attributes":{},"id":"73347","type":"SaveTool"},{"attributes":{},"id":"73393","type":"Selection"},{"attributes":{"overlay":{"id":"73349"}},"id":"73343","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"73370"},"glyph":{"id":"73371"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73372"},"selection_glyph":null,"view":{"id":"73374"}},"id":"73373","type":"GlyphRenderer"},{"attributes":{},"id":"73389","type":"Selection"},{"attributes":{},"id":"73342","type":"PanTool"},{"attributes":{},"id":"73388","type":"UnionRenderers"},{"attributes":{},"id":"73346","type":"UndoTool"},{"attributes":{},"id":"73382","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"73337"},"dimension":1,"ticker":null},"id":"73340","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"73362","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"wvAm+TwMaD+UWljVQ09yP8g8HS5pmHg/+x7iho7hfj+YgNPvWZWCP7LxNZzsuYU/ymKYSH/eiD/k0/r0EQOMP/5EXaGkJ48/DNvfphsmkT+ZExH9ZLiSPyZMQlOuSpQ/soRzqffclT8/vaT/QG+XP8z11VWKAZk/WS4HrNOTmj/mZjgCHSacP3OfaVhmuJ0/ANiarq9Knz9HCGaCfG6gP42kfi2hN6E/00CX2MUAoj8a3a+D6smiP2B5yC4Pk6M/phXh2TNcpD/tsfmEWCWlPzNOEjB97qU/euoq26G3pj/AhkOGxoCnPwcjXDHrSag/Tb903A8TqT+UW42HNNypP9r3pTJZpao/IJS+3X1uqz9nMNeIojesP63M7zPHAK0/9GgI3+vJrT86BSGKEJOuP4GhOTU1XK8/5B4p8KwSsD8HbbVFP3ewPyq7QZvR27A/TQnO8GNAsT9wV1pG9qSxP5Sl5puICbI/t/Ny8Rpusj/aQf9GrdKyP/2Pi5w/N7M/IN4X8tGbsz9ELKRHZAC0P2d6MJ32ZLQ/isi88ojJtD+tFklIGy61P9Fk1Z2tkrU/9LJh8z/3tT8XAe5I0lu2PzpPep5kwLY/XZ0G9PYktz+B65JJiYm3P6Q5H58b7rc/x4er9K1SuD/q1TdKQLe4Pw4kxJ/SG7k/MXJQ9WSAuT9UwNxK9+S5P3cOaaCJSbo/mlz19Ruuuj+aXPX1G666P5pc9fUbrro/dw5poIlJuj9UwNxK9+S5PzFyUPVkgLk/DiTEn9IbuT/q1TdKQLe4P8eHq/StUrg/pDkfnxvutz+B65JJiYm3P12dBvT2JLc/Ok96nmTAtj8XAe5I0lu2P/SyYfM/97U/0WTVna2StT+tFklIGy61P4rIvPKIybQ/Z3ownfZktD9ELKRHZAC0PyDeF/LRm7M//Y+LnD83sz/aQf9GrdKyP7fzcvEabrI/lKXmm4gJsj9wV1pG9qSxP00JzvBjQLE/KrtBm9HbsD8HbbVFP3ewP+QeKfCsErA/gaE5NTVcrz86BSGKEJOuP/RoCN/rya0/rczvM8cArT9nMNeIojesPyCUvt19bqs/2velMlmlqj+UW42HNNypP02/dNwPE6k/ByNcMetJqD/AhkOGxoCnP3rqKtuht6Y/M04SMH3upT/tsfmEWCWlP6YV4dkzXKQ/YHnILg+Toz8a3a+D6smiP9NAl9jFAKI/jaR+LaE3oT9HCGaCfG6gPwDYmq6vSp8/c59pWGa4nT/mZjgCHSacP1kuB6zTk5o/zPXVVYoBmT8/vaT/QG+XP7KEc6n33JU/JkxCU65KlD+ZExH9ZLiSPwzb36YbJpE//kRdoaQnjz/k0/r0EQOMP8pimEh/3og/svE1nOy5hT+YgNPvWZWCP/se4oaO4X4/yDwdLmmYeD+UWljVQ09yP8LwJvk8DGg/wvAm+TwMaD8=","dtype":"float64","order":"little","shape":[136]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAym4wI+QEIQDKbjAj5AQhAWcuDbUb5B0DWUqlKl+8HQKOmm8Z05AdAqqUVjZfXB0B27lWtNsgHQANs1ZZBtwdArtGiYHikB0CzmpUapI8HQCglC1DbeAdAolzRpD1gB0BQ/1z4mEUHQEjOATVOKQdAFavcwhUKB0AOngeuuOkGQJutm4muxgZA7WyIWIiiBkCjADNrTHwGQDJ1LYj+UwZAoeaIVLYqBkDNwud5XP8FQD63WrK70gVAXt8HQzOkBUDjHyVHu3MFQAMjcY5eQgVAn9/BSkYQBUAyuuA+EtwEQJ7ztkcLqARAmliGkUtyBECEedKy/DsEQEPcyBPyBARAzEIdupjNA0CntrZg1ZUDQIRwOGKUXQNAX66SpHglA0A02l4CMe0CQN7m6gNctAJAB/1zPpx8AkCNLokpxUUCQFWe1f+NDwJA/NBVTijaAUAsuOJ/56QBQMkgOatmcQFAWa/g7GY+AUDvW0S4vAwBQOmwIm7U2wBALbot8ZSsAEBmXj6VZ4AAQNxwlyN/VABAkR4q0lIqAEBzEMOT4gEAQKI3d5vHt/8/5771EVxv/z9acdxW6Sr/P2uTw5zO6f4/EznHfw+t/j+yjUQaYHX+P9AkTFqjQ/4/AMytJu8U/j9w6wEeK+39P8B9/f4eyv0/oFymLa6p/T+7TK27QpH9P0bi8sAVfv0/UvnXvxVu/T/x9/esCGT9P/sdNeVoXv0/AAAAAAAAAAA=","dtype":"float64","order":"little","shape":[136]}},"selected":{"id":"73387"},"selection_policy":{"id":"73386"}},"id":"73360","type":"ColumnDataSource"},{"attributes":{"source":{"id":"73360"}},"id":"73364","type":"CDSView"},{"attributes":{},"id":"73325","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"vqqBS64Suz/h+A2hQHe7PwRHmvbS27s/J5UmTGVAvD9L47Kh96S8P24xP/eJCb0/kX/LTBxuvT+0zVeirtK9P9cb5PdAN74/+2lwTdObvj8euPyiZQC/P0EGifj3ZL8/ZFQVTorJvz9E0dBRDhfAP1b4lnxXScA/Zx9dp6B7wD95RiPS6a3AP4pt6fwy4MA/nJSvJ3wSwT+tu3VSxUTBP7/iO30Od8E/0QkCqFepwT/iMMjSoNvBP/RXjv3pDcI/BX9UKDNAwj8XphpTfHLCPynN4H3FpMI/OvSmqA7Xwj9MG23TVwnDP11CM/6gO8M/b2n5KOptwz+BkL9TM6DDP5K3hX580sM/pN5LqcUExD+2BRLUDjfEP8cs2P5XacQ/2VOeKaGbxD/qemRU6s3EP/yhKn8zAMU/DsnwqXwyxT8f8LbUxWTFPzEXff8Ol8U/Qj5DKljJxT9UZQlVofvFP2aMz3/qLcY/d7OVqjNgxj+J2lvVfJLGP5oBIgDGxMY/rCjoKg/3xj++T65VWCnHP892dIChW8c/4Z06q+qNxz/zxADWM8DHPwTsxgB98sc/FhONK8YkyD8nOlNWD1fIPzlhGYFYicg/S4jfq6G7yD9LiN+robvIP0uI36uhu8g/OWEZgViJyD8nOlNWD1fIPxYTjSvGJMg/BOzGAH3yxz/zxADWM8DHP+GdOqvqjcc/z3Z0gKFbxz++T65VWCnHP6wo6CoP98Y/mgEiAMbExj+J2lvVfJLGP3ezlaozYMY/ZozPf+otxj9UZQlVofvFP0I+QypYycU/MRd9/w6XxT8f8LbUxWTFPw7J8Kl8MsU//KEqfzMAxT/qemRU6s3EP9lTnimhm8Q/xyzY/ldpxD+2BRLUDjfEP6TeS6nFBMQ/kreFfnzSwz+BkL9TM6DDP29p+SjqbcM/XUIz/qA7wz9MG23TVwnDPzr0pqgO18I/Kc3gfcWkwj8XphpTfHLCPwV/VCgzQMI/9FeO/ekNwj/iMMjSoNvBP9EJAqhXqcE/v+I7fQ53wT+tu3VSxUTBP5yUryd8EsE/im3p/DLgwD95RiPS6a3AP2cfXaege8A/VviWfFdJwD9E0dBRDhfAP2RUFU6Kyb8/QQaJ+Pdkvz8euPyiZQC/P/tpcE3Tm74/1xvk90A3vj+0zVeirtK9P5F/y0wcbr0/bjE/94kJvT9L47Kh96S8PyeVJkxlQLw/BEea9tLbuz/h+A2hQHe7P76qgUuuErs/vqqBS64Suz8=","dtype":"float64","order":"little","shape":[118]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEuOj4bgkDQAS46PhuCQNAtl2aDz0qA0CP9HPFb0sDQEoY4474bQNAdx36ReGQA0AtY2+e1bIDQLatWfza1gNApI4UKzb7A0AUYu7DKiAEQFn/Ha34RARAap+fLUtqBEAaLylCmI4EQMm7dehetARAtMdwrMXYBECJmFDnm/0EQCIQk6ecIgVAZAMS6TBHBUBvPbYSeWsFQFSdSpccjwVADoKJvzyyBUCHLVjC/9MFQFV24Z6r9gVAtqWj/6IXBkBhGgHduzcGQOs5LyJtVgZAOrEFAwN2BkBtwVFI4JMGQEK4TxnvrwZAO4XzHbvLBkDCuanzDuYGQG/ecYcr/wZAORJ3YxwXB0BOGBipii0HQOu8/lS3QgdA9daXp/5XB0DgR8N8VWsHQAVsgoMAfQdAuPBsVMCOB0BDqe3O2Z8HQF6PsrJerwdAET5xBEu9B0A1nSfbosoHQGt1c25Z1wdAi8x0tpziB0B9b54fze0HQFBatG9t9gdAjBRY/gb+B0BGkbQ6iQUIQJzX5pq5CwhAj6BiqvcQCEBdFXN7EBMIQPeJtqZ5FQhAiwP87sUVCEAh8X/+RBUIQDUwf28tFAhAU51l/S4SCECiXHPZtQ4IQI+FOEEtCQhAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[118]}},"selected":{"id":"73389"},"selection_policy":{"id":"73388"}},"id":"73365","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"73351"}],"tools":[{"id":"73341"},{"id":"73342"},{"id":"73343"},{"id":"73344"},{"id":"73345"},{"id":"73346"},{"id":"73347"},{"id":"73348"}]},"id":"73398","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"73360"},"glyph":{"id":"73361"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73362"},"selection_glyph":null,"view":{"id":"73364"}},"id":"73363","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"73371","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"XK+l1urtyD9u1msBNCDJP3/9MSx9Usk/kST4VsaEyT+jS76BD7fJP7RyhKxY6ck/xplK16Ebyj/XwBAC603KP+nn1iw0gMo/+w6dV32yyj8MNmOCxuTKPx5dKa0PF8s/L4Tv11hJyz9Bq7UConvLP1PSey3rrcs/ZPlBWDTgyz92IAiDfRLMP4hHzq3GRMw/mW6U2A93zD+rlVoDWanMP7y8IC6i28w/zuPmWOsNzT/gCq2DNEDNP/Exc659cs0/A1k52cakzT8UgP8DENfNPyanxS5ZCc4/OM6LWaI7zj9J9VGE623OP1scGK80oM4/bEPe2X3Szj9+aqQExwTPP5CRai8QN88/obgwWllpzz+z3/aEopvPP8UGva/rzc8/65ZBbRoA0D90qqQCPxnQP/29B5hjMtA/htFqLYhL0D8P5c3CrGTQP5j4MFjRfdA/IAyU7fWW0D+pH/eCGrDQPzIzWhg/ydA/u0a9rWPi0D9EWiBDiPvQP8xtg9isFNE/VYHmbdEt0T/elEkD9kbRP2eorJgaYNE/8LsPLj950T94z3LDY5LRPwHj1ViIq9E/ivY47qzE0T8TCpyD0d3RP5wd/xj29tE/JDFirhoQ0j+tRMVDPynSPzZYKNljQtI/v2uLbohb0j9If+4DrXTSP9CSUZnRjdI/Waa0Lvam0j/iuRfEGsDSP2vNelk/2dI/9ODd7mPy0j989ECEiAvTPwUIpBmtJNM/jhsHr9E90z8XL2pE9lbTP6BCzdkacNM/KVYwbz+J0z+xaZMEZKLTPzp99pmIu9M/w5BZL63U0z9MpLzE0e3TP9W3H1r2BtQ/1bcfWvYG1D/Vtx9a9gbUP0ykvMTR7dM/w5BZL63U0z86ffaZiLvTP7FpkwRkotM/KVYwbz+J0z+gQs3ZGnDTPxcvakT2VtM/jhsHr9E90z8FCKQZrSTTP3z0QISIC9M/9ODd7mPy0j9rzXpZP9nSP+K5F8QawNI/Waa0Lvam0j/QklGZ0Y3SP0h/7gOtdNI/v2uLbohb0j82WCjZY0LSP61ExUM/KdI/JDFirhoQ0j+cHf8Y9vbRPxMKnIPR3dE/ivY47qzE0T8B49VYiKvRP3jPcsNjktE/8LsPLj950T9nqKyYGmDRP96USQP2RtE/VYHmbdEt0T/MbYPYrBTRP0RaIEOI+9A/u0a9rWPi0D8yM1oYP8nQP6kf94IasNA/IAyU7fWW0D+Y+DBY0X3QPw/lzcKsZNA/htFqLYhL0D/9vQeYYzLQP3SqpAI/GdA/65ZBbRoA0D/FBr2v683PP7Pf9oSim88/obgwWllpzz+QkWovEDfPP35qpATHBM8/bEPe2X3Szj9bHBivNKDOP0n1UYTrbc4/OM6LWaI7zj8mp8UuWQnOPxSA/wMQ180/A1k52cakzT/xMXOufXLNP+AKrYM0QM0/zuPmWOsNzT+8vCAuotvMP6uVWgNZqcw/mW6U2A93zD+IR86txkTMP3YgCIN9Esw/ZPlBWDTgyz9T0nst663LP0GrtQKie8s/L4Tv11hJyz8eXSmtDxfLPww2Y4LG5Mo/+w6dV32yyj/p59YsNIDKP9fAEALrTco/xplK16Ebyj+0coSsWOnJP6NLvoEPt8k/kST4VsaEyT9//TEsfVLJP27WawE0IMk/XK+l1urtyD9cr6XW6u3IPw==","dtype":"float64","order":"little","shape":[158]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO/j6FCqA/T87+PoUKoD9P9dUKeEtvf0/DHYwMUX3/T/8pJ7jDi3+P+Sv4M87YP4/lt3K9XiR/j/wECAR48H+P+36RQ+l7/4/Zv02KK8c/z9JwAQBzEX/P4zRijkdbP8/X8Jn3e+P/z+1oXyY47L/P22JWZ9l0v8/6sp9DrPv/z/xLDOw0AUAQB9+EXBNEgBA1Zp6xLUdAEB4mNXNFCgAQIvWCCgTMQBApL8iIio6AEB4y3CGiEEAQF0v9qZZSQBA0rgAUBRQAEDTNBnRZlUAQIyt8YHsWgBAShdjEelfAEDSrP3y3GMAQMpwLrfDZwBA36kVRH9rAEA7RNy2mW8AQHfBfetxcgBAqGqsiDp2AEDxGlZFc3oAQDlRfclcfQBAa1L6uuOAAEAL8iV4HIUAQKjEikZeiQBAs6buqO+MAEB7FlcrMJEAQO/2a7+PlQBAmx2tcaqZAEDrHfQvg58AQPgNKNgApgBA5ZKcnpSsAEAa3Ff4sLMAQHHd/3OWugBAHKE3QibCAEBSKNvPdskAQJAEs6vq0gBAwSrqd/DbAEC0Sua/ReYAQJAwYcg48QBAi4S9ogz9AEAMlACeUggBQNTqAdZYFQFApnSXJ9YiAUBZWr4wZjABQFoNqZQ2PwFAvYhw2/VNAUC4rUlxP10BQJIhj5s3bgFA0jp4VPB/AUD2uV+b4pIBQAyno4m3pQFAo1BJgs64AUCA8AY6L8wBQJszQ4Oo4QFA4tt3ZoX4AUBabn0nWBACQBBbRUvkJwJAqE1qzUVBAkABK8PcyVoCQIap3tMndgJAzMxj0P+RAkD6cEWcJ64CQMinsPEczAJAV1anAEbqAkAAAAAAAAAAAA==","dtype":"float64","order":"little","shape":[158]}},"selected":{"id":"73391"},"selection_policy":{"id":"73390"}},"id":"73370","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"73382"},"ticker":{"id":"73338"}},"id":"73337","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"73349","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"73367","type":"Patch"},{"attributes":{},"id":"73334","type":"BasicTicker"},{"attributes":{"below":[{"id":"73333"}],"center":[{"id":"73336"},{"id":"73340"}],"left":[{"id":"73337"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"73363"},{"id":"73368"},{"id":"73373"},{"id":"73378"}],"title":{"id":"73381"},"toolbar":{"id":"73351"},"toolbar_location":null,"x_range":{"id":"73325"},"x_scale":{"id":"73329"},"y_range":{"id":"73327"},"y_scale":{"id":"73331"}},"id":"73324","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"73365"}},"id":"73369","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#2a2eec","line_alpha":0.1,"line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"73372","type":"Patch"},{"attributes":{},"id":"73384","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"73384"},"ticker":{"id":"73334"}},"id":"73333","type":"LinearAxis"},{"attributes":{},"id":"73331","type":"LinearScale"},{"attributes":{"data_source":{"id":"73365"},"glyph":{"id":"73366"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"73367"},"selection_glyph":null,"view":{"id":"73369"}},"id":"73368","type":"GlyphRenderer"}],"root_ids":["73400"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"2a13c485-c294-435d-8e7a-8e1c3f2da4a7","root_ids":["73400"],"roots":{"73400":"afecb496-6251-4561-baac-c009d1075520"}}];
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