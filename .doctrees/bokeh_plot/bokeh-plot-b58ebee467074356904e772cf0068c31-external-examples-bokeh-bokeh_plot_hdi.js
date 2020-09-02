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
    
      
      
    
      var element = document.getElementById("c16851f0-687b-430d-ae8e-a4b1490c6eb7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c16851f0-687b-430d-ae8e-a4b1490c6eb7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"5ab02102-3c1c-4bfe-91c2-b38342682135":{"roots":{"references":[{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"72612","type":"Patch"},{"attributes":{},"id":"72597","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"SK1EJ6dLAcAZN1iHkOP/vzDP3GJkBv+/pnLkzEWY97/567bHcN71v5cfNNc9ofS/ZqleKnRx87/Q4EoskHDzv5vi2qnVaPK/xUJVNy/58L+YwVr97/bwvx7nxa44evC/kAyiGhDu7b+tP6N02sHsv32rvy4FY+q/LmfRmDfU57+/NwRhdwfnv8IwjD52sOa/coNEmMmJ5r/U2w2YiSPjv4Xs9AyZi+K/WnIzyCkZ4r9Qu94zj+Phv1i7LhN5zOG/aUwO+tNd4b+6g+rCTRLhv9nE+Ws9B+G/gr/hRxZb3b9+nnVvptTcvz8EEWOxqty/7LBToCzy2b8Y8wgN9z3Yv70Vl1b6M9a/JUefAO6l1L/dLJU1sFXSv6Ix4yYI0tG/toHzeTAe0L/8PTt+KM/Lv4Z+WYhzNsq/Fwqx5EsXsr97cEXOluSovxgrRFBaCaK/YQ1AP6wYlb+IRpjun0SRvzv17uCuLaE/s1O0GQ07oT8fPREK52i1P5uBQqrspbg/n5dbgd35vT/n0ghGhQfAPxUQzFlOdsM/supl4IhCxD8sWS6gqdHGP7WT5Wu17ss/pRhhH9pwzT+cNIg0kQrOP6g1CLTXGNE/uWr0kBw70T8LGHHESm3RPwzTkYxH79U/2AtDyP8L2D9xmAwQuF/YPzzRdpn3o9g/MkEeshX12D/SXpDJfczaP9+TaPazXuA/lnBvXWGq4D9YNtfgMjvkPxU4dTMtY+Q/lGW+vBat5D89hQLMhpnnP4pUOFgS5+c/5SMgcszu5z/xamK7yUzpP1p6ugAEe+k/9pxpKotK6z/ZNowx4nHsPzmclbjVFu8/HX2nkdsf7z8NO6iGp4bvPzsVu7p8IvA/kmfPvO3F8D9NkEITgnrxPxjf/5CUlPE/Lz95Twtq8j+SEdMFyVD0P7Tus2Juk/U/11BSumuu9T9wCv+fMkn4P3MlUSS+fvg/gze8ct+c+D/e0KdAbyL8P9GMJtLHZvw/GkK42Rhx/D/21lvkLtn8P98utJiY/f0/ZpwlPnO//z+NJzj6IVwAQD/rmoR0nwBAjHDBz/5bAkA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"cKV2sbFo7T905FO8Nw7wP2iYkc7NfPA/rcaNGd0z9D8EiiScxxD1PzTwZRRhr/U/TavQ6kVH9j+Yj9rpt0f2P7KOEiuVy/Y/nl5VZGiD9z80n1IBiIT3P3EMnajjwvc/3HxX+XuE+D8VMNdiic/4PyEVULQ+Z/k/NKbLGfIK+j8Q8r4nIj76P9DzXHDiU/o/JN/umY1d+j8LifyZHTf7P9/EwrwZXfs/aiPzjbV5+z8sUQgzHIf7PypRNLvhjPs/5mx8AYuo+z8SX0WPbLv7P8qOAaUwvvs/EMgDN51U/D8wTBEya2X8P3jfndOpavw/4on1a7rB/D+d4V4eQfj8P0gdLbWAOf0/GxfsP0Jr/T9kWk35SbX9P8yZI/u+xf0/yY/B8Dn8/T8gTBx4DUP+PxhoeseYXP4/r3faoEVv/z8+6sakbZz/P1Tvvpbat/8/5X+Bp87V/z9zzyLAdt3/P+rdwV1bIgBAp2gzGnYiAED0RCico1UAQAYKqbKXYgBAXm4Fdud3AECXRjAqPIAAQIFgznKymwBAVi8DRxSiAEDJcgFNjbYAQJ4sX6t13wBAxQj70IbrAEClQaSJVPAAQFqDQHuNEQFArEYPybETAUCBEUes1BYBQDEdyXj0XgFAvjCE/L+AAUCHyQCB+4UBQBRtl3k/igFAE+QhW1GPAUDtBZncx6wBQHwSzX7WCwJAE+6tK0wVAkDL5hpcZocCQAOnbqZljAJAssyX16KVAkCoUIDZMPMCQJEKB0vi/AJAfQREjtn9AkBeTWw3mSkDQEtPF4BgLwNAnzNNZVFpA0DbhjFGPI4DQIezErfa4gNApO80cvvjA0BiB9Xw1PADQE/Fri6fCARA5Nkzb3sxBEATpNCEoF4EQMb3PyQlZQRAzE/e04KaBEBkxHRBMhQFQK37rJjbZAVANpSU7pprBUCcwv+nTBIGQF1JFImvHwZA4Q2v3DcnBkA49CnQmwgHQDSjifSxGQdAhhBuNkYcB0C+9Ra5SzYHQLgLLSZmfwdAGmeJz9zvB0DGExz9EC4IQKB1TUK6TwhARrjgZ/8tCUA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"72629"},"selection_policy":{"id":"72628"}},"id":"72615","type":"ColumnDataSource"},{"attributes":{},"id":"72588","type":"BasicTicker"},{"attributes":{"axis":{"id":"72583"},"ticker":null},"id":"72586","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"72617","type":"Line"},{"attributes":{},"id":"72594","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"72622"},"ticker":{"id":"72588"}},"id":"72587","type":"LinearAxis"},{"attributes":{"data_source":{"id":"72615"},"glyph":{"id":"72616"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72617"},"selection_glyph":null,"view":{"id":"72619"}},"id":"72618","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"72583"}],"center":[{"id":"72586"},{"id":"72590"}],"left":[{"id":"72587"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"72613"},{"id":"72618"}],"title":{"id":"72621"},"toolbar":{"id":"72601"},"toolbar_location":"above","x_range":{"id":"72575"},"x_scale":{"id":"72579"},"y_range":{"id":"72577"},"y_scale":{"id":"72581"}},"id":"72574","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"72628","type":"UnionRenderers"},{"attributes":{},"id":"72592","type":"PanTool"},{"attributes":{"text":""},"id":"72621","type":"Title"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"72616","type":"Line"},{"attributes":{},"id":"72629","type":"Selection"},{"attributes":{},"id":"72577","type":"DataRange1d"},{"attributes":{"data_source":{"id":"72610"},"glyph":{"id":"72611"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72612"},"selection_glyph":null,"view":{"id":"72614"}},"id":"72613","type":"GlyphRenderer"},{"attributes":{"source":{"id":"72615"}},"id":"72619","type":"CDSView"},{"attributes":{},"id":"72596","type":"UndoTool"},{"attributes":{"callback":null},"id":"72598","type":"HoverTool"},{"attributes":{"overlay":{"id":"72599"}},"id":"72593","type":"BoxZoomTool"},{"attributes":{},"id":"72624","type":"BasicTickFormatter"},{"attributes":{},"id":"72622","type":"BasicTickFormatter"},{"attributes":{},"id":"72581","type":"LinearScale"},{"attributes":{"formatter":{"id":"72624"},"ticker":{"id":"72584"}},"id":"72583","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"72611","type":"Patch"},{"attributes":{},"id":"72627","type":"Selection"},{"attributes":{},"id":"72584","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"Iy9tGrg0AcD+sJUNyR0BwLO05vPq7wDAabg32gzCAMAevIjALpQAwNS/2aZQZgDAisMqjXI4AMA/x3tzlAoAwOqVmbNsuf+/VZ07gLBd/7/ApN1M9AH/vyusfxk4pv6/lrMh5ntK/r8Cu8Oyv+79v23CZX8Dk/2/2MkHTEc3/b9E0akYi9v8v6/YS+XOf/y/GuDtsRIk/L+F549+Vsj7v/DuMUuabPu/XPbTF94Q+7/H/XXkIbX6vzIFGLFlWfq/nQy6fan9+b8IFFxK7aH5v3Qb/hYxRvm/3yKg43Tq+L9KKkKwuI74v7Yx5Hz8Mvi/IDmGSUDX97+MQCgWhHv3v/dHyuLHH/e/Yk9srwvE9r/OVg58T2j2vzhesEiTDPa/pGVSFdew9b8PbfThGlX1v3p0lq5e+fS/5ns4e6Kd9L9Rg9pH5kH0v7yKfBQq5vO/J5Ie4W2K87+SmcCtsS7zv/6gYnr10vK/aagERzl38r/Ur6YTfRvyvz+3SODAv/G/qr7qrARk8b8Wxox5SAjxv4HNLkaMrPC/7NTQEtBQ8L+uuOW+J+rvv4bHKVivMu+/XNZt8TZ77r8y5bGKvsPtvwj09SNGDO2/3gI6vc1U7L+2EX5WVZ3rv4wgwu/c5eq/Yi8GiWQu6r84Pkoi7HbpvxBNjrtzv+i/5lvSVPsH6L+8ahbuglDnv5J5WocKmea/aIieIJLh5b9Al+K5GSrlvxamJlOhcuS/7LRq7Ci747/Cw66FsAPjv5rS8h44TOK/cOE2uL+U4b9G8HpRR93gvxz/vurOJeC/5BsGCK3c3r+UOY46vG3dv0BXFm3L/tu/7HSen9qP2r+YkibS6SDZv0iwrgT5sde/9M02NwhD1r+g675pF9TUv0wJR5wmZdO/+CbPzjX20b+oRFcBRYfQv6jEvmeoMM6/AADPzMZSy79YO98x5XTIv7B275YDl8W/ELL/+yG5wr/A2h/CgLa/v4BRQIy9+rm/QMhgVvo+tL/AfQJBbgatv0BrQ9XnjqG/AGIRpoVdiL8A6OoIlICFP4DM+W2r16A/QN+42TFPrD/g+LsiXOOzPyCCm1gfn7k/gAt7juJavz9gSi3iUovCPxAPHX00acU/sNMMGBZHyD9QmPyy9yTLPwBd7E3ZAs4/0BBudF1w0D8o8+VBTt/RP3jVXQ8/TtM/yLfV3C+91D8gmk2qICzWP3B8xXcRm9c/yF49RQIK2T8YQbUS83jaP2gjLeDj59s/wAWlrdRW3T8Q6Bx7xcXePzBlSiRbGuA/XFYGi9PR4D+ER8LxS4nhP7A4fljEQOI/2Ck6vzz44j8AG/Ylta/jPywMsowtZ+Q/VP1t86Ue5T+A7ilaHtblP6jf5cCWjeY/0NChJw9F5z/8wV2Oh/znPySzGfX/s+g/UKTVW3hr6T94lZHC8CLqP6CGTSlp2uo/zHcJkOGR6z/0aMX2WUnsPyBagV3SAO0/SEs9xEq47T9wPPkqw2/uP5wttZE7J+8/xB5x+LPe7z/2h5YvFkvwP4yA9GLSpvA/IHlSlo4C8T+2cbDJSl7xP0pqDv0GuvE/3mJsMMMV8j90W8pjf3HyPwhUKJc7zfI/nkyGyvco8z8yReT9s4TzP8Y9QjFw4PM/XDagZCw89D/wLv6X6Jf0P4YnXMuk8/Q/GiC6/mBP9T+uGBgyHav1P0QRdmXZBvY/2AnUmJVi9j9sAjLMUb72PwL7j/8NGvc/lvPtMsp19z8s7EtmhtH3P8DkqZlCLfg/VN0Hzf6I+D/q1WUAu+T4P37OwzN3QPk/FMchZzOc+T+ov3+a7/f5Pzy43c2rU/o/0rA7AWiv+j9mqZk0JAv7P/yh92fgZvs/kJpVm5zC+z8kk7POWB78P7qLEQIVevw/ToRvNdHV/D/kfM1ojTH9P3h1K5xJjf0/DG6JzwXp/T+gZucCwkT+PzhfRTZ+oP4/zFejaTr8/j9gUAGd9lf/P/RIX9Cys/8/xKDegbcHAEAQnY2blTUAQFqZPLVzYwBApJXrzlGRAEDukZroL78AQDiOSQIO7QBAhIr4G+waAUDOhqc1ykgBQBiDVk+odgFAYn8FaYakAUCse7SCZNIBQPZ3Y5xCAAJAQnQStiAuAkCMcMHP/lsCQIxwwc/+WwJAQnQStiAuAkD2d2OcQgACQKx7tIJk0gFAYn8FaYakAUAYg1ZPqHYBQM6GpzXKSAFAhIr4G+waAUA4jkkCDu0AQO6RmugvvwBApJXrzlGRAEBamTy1c2MAQBCdjZuVNQBAxKDegbcHAED0SF/QsrP/P2BQAZ32V/8/zFejaTr8/j84X0U2fqD+P6Bm5wLCRP4/DG6JzwXp/T94dSucSY39P+R8zWiNMf0/ToRvNdHV/D+6ixECFXr8PySTs85YHvw/kJpVm5zC+z/8ofdn4Gb7P2apmTQkC/s/0rA7AWiv+j88uN3Nq1P6P6i/f5rv9/k/FMchZzOc+T9+zsMzd0D5P+rVZQC75Pg/VN0Hzf6I+D/A5KmZQi34PyzsS2aG0fc/lvPtMsp19z8C+4//DRr3P2wCMsxRvvY/2AnUmJVi9j9EEXZl2Qb2P64YGDIdq/U/GiC6/mBP9T+GJ1zLpPP0P/Au/pfol/Q/XDagZCw89D/GPUIxcODzPzJF5P2zhPM/nkyGyvco8z8IVCiXO83yP3RbymN/cfI/3mJsMMMV8j9Kag79BrrxP7ZxsMlKXvE/IHlSlo4C8T+MgPRi0qbwP/aHli8WS/A/xB5x+LPe7z+cLbWROyfvP3A8+SrDb+4/SEs9xEq47T8gWoFd0gDtP/RoxfZZSew/zHcJkOGR6z+ghk0padrqP3iVkcLwIuo/UKTVW3hr6T8ksxn1/7PoP/zBXY6H/Oc/0NChJw9F5z+o3+XAlo3mP4DuKVoe1uU/VP1t86Ue5T8sDLKMLWfkPwAb9iW1r+M/2Ck6vzz44j+wOH5YxEDiP4RHwvFLieE/XFYGi9PR4D8wZUokWxrgPxDoHHvFxd4/wAWlrdRW3T9oIy3g4+fbPxhBtRLzeNo/yF49RQIK2T9wfMV3EZvXPyCaTaogLNY/yLfV3C+91D941V0PP07TPyjz5UFO39E/0BBudF1w0D8AXexN2QLOP1CY/LL3JMs/sNMMGBZHyD8QDx19NGnFP2BKLeJSi8I/gAt7juJavz8ggptYH5+5P+D4uyJc47M/QN+42TFPrD+AzPltq9egPwDo6giUgIU/AGIRpoVdiL9Aa0PV546hv8B9AkFuBq2/QMhgVvo+tL+AUUCMvfq5v8DaH8KAtr+/ELL/+yG5wr+wdu+WA5fFv1g73zHldMi/AADPzMZSy7+oxL5nqDDOv6hEVwFFh9C/+CbPzjX20b9MCUecJmXTv6DrvmkX1NS/9M02NwhD1r9IsK4E+bHXv5iSJtLpINm/7HSen9qP2r9AVxZty/7bv5Q5jjq8bd2/5BsGCK3c3r8c/77qziXgv0bwelFH3eC/cOE2uL+U4b+a0vIeOEziv8LDroWwA+O/7LRq7Ci7478WpiZToXLkv0CX4rkZKuW/aIieIJLh5b+SeVqHCpnmv7xqFu6CUOe/5lvSVPsH6L8QTY67c7/ovzg+SiLsdum/Yi8GiWQu6r+MIMLv3OXqv7YRflZVneu/3gI6vc1U7L8I9PUjRgztvzLlsYq+w+2/XNZt8TZ77r+GxylYrzLvv6645b4n6u+/7NTQEtBQ8L+BzS5GjKzwvxbGjHlICPG/qr7qrARk8b8/t0jgwL/xv9SvphN9G/K/aagERzl38r/+oGJ69dLyv5KZwK2xLvO/J5Ie4W2K87+8inwUKubzv1GD2kfmQfS/5ns4e6Kd9L96dJauXvn0vw9t9OEaVfW/pGVSFdew9b84XrBIkwz2v85WDnxPaPa/Yk9srwvE9r/3R8rixx/3v4xAKBaEe/e/IDmGSUDX97+2MeR8/DL4v0oqQrC4jvi/3yKg43Tq+L90G/4WMUb5vwgUXErtofm/nQy6fan9+b8yBRixZVn6v8f9deQhtfq/XPbTF94Q+7/w7jFLmmz7v4Xnj35WyPu/GuDtsRIk/L+v2Evlzn/8v0TRqRiL2/y/2MkHTEc3/b9twmV/A5P9vwK7w7K/7v2/lrMh5ntK/r8rrH8ZOKb+v8Ck3Uz0Af+/VZ07gLBd/7/qlZmzbLn/vz/He3OUCgDAisMqjXI4AMDUv9mmUGYAwB68iMAulADAabg32gzCAMCztObz6u8AwP6wlQ3JHQHAIy9tGrg0AcA=","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"72627"},"selection_policy":{"id":"72626"}},"id":"72610","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"72600","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"72587"},"dimension":1,"ticker":null},"id":"72590","type":"Grid"},{"attributes":{},"id":"72579","type":"LinearScale"},{"attributes":{},"id":"72626","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"72591"},{"id":"72592"},{"id":"72593"},{"id":"72594"},{"id":"72595"},{"id":"72596"},{"id":"72597"},{"id":"72598"}]},"id":"72601","type":"Toolbar"},{"attributes":{"overlay":{"id":"72600"}},"id":"72595","type":"LassoSelectTool"},{"attributes":{"source":{"id":"72610"}},"id":"72614","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"72599","type":"BoxAnnotation"},{"attributes":{},"id":"72575","type":"DataRange1d"},{"attributes":{},"id":"72591","type":"ResetTool"}],"root_ids":["72574"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"5ab02102-3c1c-4bfe-91c2-b38342682135","root_ids":["72574"],"roots":{"72574":"c16851f0-687b-430d-ae8e-a4b1490c6eb7"}}];
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