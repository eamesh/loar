var fe = Object.defineProperty;
var ye = (e, t, n) => t in e ? fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var C1 = (e, t, n) => (ye(e, typeof t != "symbol" ? t + "" : t, n), n);
import { utils as P, init as ge, FormatDateType as N1, DomPosition as N0, ActionType as Ce, dispose as me, TooltipIconPosition as K1, registerOverlay as he } from "klinecharts";
function I1(e, t, n) {
  const r = (e.x - t.x) * Math.cos(n) - (e.y - t.y) * Math.sin(n) + t.x, a = (e.x - t.x) * Math.sin(n) + (e.y - t.y) * Math.cos(n) + t.y;
  return { x: r, y: a };
}
function C0(e, t) {
  if (e.length > 1) {
    let n;
    return e[0].x === e[1].x && e[0].y !== e[1].y ? e[0].y < e[1].y ? n = {
      x: e[0].x,
      y: t.height
    } : n = {
      x: e[0].x,
      y: 0
    } : e[0].x > e[1].x ? n = {
      x: 0,
      y: P.getLinearYFromCoordinates(e[0], e[1], { x: 0, y: e[0].y })
    } : n = {
      x: t.width,
      y: P.getLinearYFromCoordinates(e[0], e[1], { x: t.width, y: e[0].y })
    }, { coordinates: [e[0], n] };
  }
  return [];
}
function x9(e, t) {
  const n = Math.abs(e.x - t.x), r = Math.abs(e.y - t.y);
  return Math.sqrt(n * n + r * r);
}
const de = {
  name: "arrow",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    if (e.length > 1) {
      const t = e[1].x > e[0].x ? 0 : 1, n = P.getLinearSlopeIntercept(e[0], e[1]);
      let r;
      n ? r = Math.atan(n[0]) + Math.PI * t : e[1].y > e[0].y ? r = Math.PI / 2 : r = Math.PI / 2 * 3;
      const a = I1({ x: e[1].x - 8, y: e[1].y + 4 }, e[1], r), s = I1({ x: e[1].x - 8, y: e[1].y - 4 }, e[1], r);
      return [
        {
          type: "line",
          attrs: { coordinates: e }
        },
        {
          type: "line",
          ignoreEvent: !0,
          attrs: { coordinates: [a, e[1], s] }
        }
      ];
    }
    return [];
  }
}, pe = {
  name: "circle",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    circle: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e }) => {
    if (e.length > 1) {
      const t = x9(e[0], e[1]);
      return {
        type: "circle",
        attrs: {
          ...e[0],
          r: t
        },
        styles: { style: "stroke_fill" }
      };
    }
    return [];
  }
}, ve = {
  name: "rect",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e }) => e.length > 1 ? [
    {
      type: "polygon",
      attrs: {
        coordinates: [
          e[0],
          { x: e[1].x, y: e[0].y },
          e[1],
          { x: e[0].x, y: e[1].y }
        ]
      },
      styles: { style: "stroke_fill" }
    }
  ] : []
}, _e = {
  name: "parallelogram",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e }) => {
    if (e.length === 2)
      return [
        {
          type: "line",
          ignoreEvent: !0,
          attrs: { coordinates: e }
        }
      ];
    if (e.length === 3) {
      const t = { x: e[0].x + (e[2].x - e[1].x), y: e[2].y };
      return [
        {
          type: "polygon",
          attrs: { coordinates: [e[0], e[1], e[2], t] },
          styles: { style: "stroke_fill" }
        }
      ];
    }
    return [];
  },
  performEventPressedMove: ({ points: e, performPointIndex: t, performPoint: n }) => {
    t < 2 && (e[0].price = n.price, e[1].price = n.price);
  },
  performEventMoveForDrawing: ({ currentStep: e, points: t, performPoint: n }) => {
    e === 2 && (t[0].price = n.price);
  }
}, be = {
  name: "triangle",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e }) => [
    {
      type: "polygon",
      attrs: { coordinates: e },
      styles: { style: "stroke_fill" }
    }
  ]
}, $e = {
  name: "fibonacciCircle",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    if (e.length > 1) {
      const t = Math.abs(e[0].x - e[1].x), n = Math.abs(e[0].y - e[1].y), r = Math.sqrt(t * t + n * n), a = [0.236, 0.382, 0.5, 0.618, 0.786, 1], s = [], o = [];
      return a.forEach((i) => {
        const c = r * i;
        s.push(
          { ...e[0], r: c }
        ), o.push({
          x: e[0].x,
          y: e[0].y + c + 6,
          text: `${(i * 100).toFixed(1)}%`
        });
      }), [
        {
          type: "circle",
          attrs: s,
          styles: { style: "stroke" }
        },
        {
          type: "text",
          ignoreEvent: !0,
          attrs: o
        }
      ];
    }
    return [];
  }
}, Le = {
  name: "fibonacciSegment",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, overlay: t, precision: n }) => {
    const r = [], a = [];
    if (e.length > 1) {
      const s = e[1].x > e[0].x ? e[0].x : e[1].x, o = [1, 0.786, 0.618, 0.5, 0.382, 0.236, 0], i = e[0].y - e[1].y, c = t.points, f = c[0].value - c[1].value;
      o.forEach((l) => {
        const y = e[1].y + i * l, d = (c[1].value + f * l).toFixed(n.price);
        r.push({ coordinates: [{ x: e[0].x, y }, { x: e[1].x, y }] }), a.push({
          x: s,
          y,
          text: `${d} (${(l * 100).toFixed(1)}%)`,
          baseline: "bottom"
        });
      });
    }
    return [
      {
        type: "line",
        attrs: r
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: a
      }
    ];
  }
}, xe = {
  name: "fibonacciSpiral",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, bounding: t }) => {
    if (e.length > 1) {
      const n = x9(e[0], e[1]) / Math.sqrt(24), r = e[1].x > e[0].x ? 0 : 1, a = P.getLinearSlopeIntercept(e[0], e[1]);
      let s;
      a ? s = Math.atan(a[0]) + Math.PI * r : e[1].y > e[0].y ? s = Math.PI / 2 : s = Math.PI / 2 * 3;
      const o = I1(
        { x: e[0].x - n, y: e[0].y },
        e[0],
        s
      ), i = I1(
        { x: e[0].x - n, y: e[0].y - n },
        e[0],
        s
      ), c = [{
        ...o,
        r: n,
        startAngle: s,
        endAngle: s + Math.PI / 2
      }, {
        ...i,
        r: n * 2,
        startAngle: s + Math.PI / 2,
        endAngle: s + Math.PI
      }];
      let f = e[0].x - n, l = e[0].y - n;
      for (let y = 2; y < 9; y++) {
        const d = c[y - 2].r + c[y - 1].r;
        let $ = 0;
        switch (y % 4) {
          case 0: {
            $ = s, f -= c[y - 2].r;
            break;
          }
          case 1: {
            $ = s + Math.PI / 2, l -= c[y - 2].r;
            break;
          }
          case 2: {
            $ = s + Math.PI, f += c[y - 2].r;
            break;
          }
          case 3: {
            $ = s + Math.PI / 2 * 3, l += c[y - 2].r;
            break;
          }
        }
        const I = $ + Math.PI / 2, F = I1({ x: f, y: l }, e[0], s);
        c.push({
          ...F,
          r: d,
          startAngle: $,
          endAngle: I
        });
      }
      return [
        {
          type: "arc",
          attrs: c
        },
        {
          type: "line",
          attrs: C0(e, t)
        }
      ];
    }
    return [];
  }
}, ke = {
  name: "fibonacciSpeedResistanceFan",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, bounding: t }) => {
    const n = [];
    let r = [];
    const a = [];
    if (e.length > 1) {
      const s = e[1].x > e[0].x ? -38 : 4, o = e[1].y > e[0].y ? -2 : 20, i = e[1].x - e[0].x, c = e[1].y - e[0].y;
      [1, 0.75, 0.618, 0.5, 0.382, 0.25, 0].forEach((l) => {
        const y = e[1].x - i * l, d = e[1].y - c * l;
        n.push({ coordinates: [{ x: y, y: e[0].y }, { x: y, y: e[1].y }] }), n.push({ coordinates: [{ x: e[0].x, y: d }, { x: e[1].x, y: d }] }), r = r.concat(C0([e[0], { x: y, y: e[1].y }], t)), r = r.concat(C0([e[0], { x: e[1].x, y: d }], t)), a.unshift({
          x: e[0].x + s,
          y: d + 10,
          text: `${l.toFixed(3)}`
        }), a.unshift({
          x: y - 18,
          y: e[0].y + o,
          text: `${l.toFixed(3)}`
        });
      });
    }
    return [
      {
        type: "line",
        attrs: n
      },
      {
        type: "line",
        attrs: r
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: a
      }
    ];
  }
}, Ae = {
  name: "fibonacciExtension",
  totalStep: 4,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e, overlay: t, precision: n }) => {
    const r = [], a = [];
    if (e.length > 2) {
      const s = t.points, o = s[1].value - s[0].value, i = e[1].y - e[0].y, c = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1], f = e[2].x > e[1].x ? e[1].x : e[2].x;
      c.forEach((l) => {
        const y = e[2].y + i * l, d = (s[2].value + o * l).toFixed(n.price);
        r.push({ coordinates: [{ x: e[1].x, y }, { x: e[2].x, y }] }), a.push({
          x: f,
          y,
          text: `${d} (${(l * 100).toFixed(1)}%)`,
          baseline: "bottom"
        });
      });
    }
    return [
      {
        type: "line",
        attrs: { coordinates: e },
        styles: { style: "dashed" }
      },
      {
        type: "line",
        attrs: r
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: a
      }
    ];
  }
}, we = {
  name: "gannBox",
  totalStep: 3,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e }) => {
    if (e.length > 1) {
      const t = (e[1].y - e[0].y) / 4, n = e[1].x - e[0].x, r = [
        { coordinates: [e[0], { x: e[1].x, y: e[1].y - t }] },
        { coordinates: [e[0], { x: e[1].x, y: e[1].y - t * 2 }] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[1].x, y: e[0].y + t }] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[1].x, y: e[0].y + t * 2 }] },
        { coordinates: [{ ...e[0] }, { x: e[0].x + n * 0.236, y: e[1].y }] },
        { coordinates: [{ ...e[0] }, { x: e[0].x + n * 0.5, y: e[1].y }] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[0].x + n * 0.236, y: e[0].y }] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[0].x + n * 0.5, y: e[0].y }] }
      ], a = [
        { coordinates: [e[0], e[1]] },
        { coordinates: [{ x: e[0].x, y: e[1].y }, { x: e[1].x, y: e[0].y }] }
      ];
      return [
        {
          type: "line",
          attrs: [
            { coordinates: [e[0], { x: e[1].x, y: e[0].y }] },
            { coordinates: [{ x: e[1].x, y: e[0].y }, e[1]] },
            { coordinates: [e[1], { x: e[0].x, y: e[1].y }] },
            { coordinates: [{ x: e[0].x, y: e[1].y }, e[0]] }
          ]
        },
        {
          type: "polygon",
          ignoreEvent: !0,
          attrs: {
            coordinates: [
              e[0],
              { x: e[1].x, y: e[0].y },
              e[1],
              { x: e[0].x, y: e[1].y }
            ]
          },
          styles: { style: "fill" }
        },
        {
          type: "line",
          attrs: r,
          styles: { style: "dashed" }
        },
        {
          type: "line",
          attrs: a
        }
      ];
    }
    return [];
  }
}, Me = {
  name: "threeWaves",
  totalStep: 5,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    const t = e.map((n, r) => ({
      ...n,
      text: `(${r})`,
      baseline: "bottom"
    }));
    return [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: t
      }
    ];
  }
}, Se = {
  name: "fiveWaves",
  totalStep: 7,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    const t = e.map((n, r) => ({
      ...n,
      text: `(${r})`,
      baseline: "bottom"
    }));
    return [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: t
      }
    ];
  }
}, Te = {
  name: "eightWaves",
  totalStep: 10,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    const t = e.map((n, r) => ({
      ...n,
      text: `(${r})`,
      baseline: "bottom"
    }));
    return [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: t
      }
    ];
  }
}, Ie = {
  name: "anyWaves",
  totalStep: Number.MAX_SAFE_INTEGER,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    const t = e.map((n, r) => ({
      ...n,
      text: `(${r})`,
      baseline: "bottom"
    }));
    return [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: t
      }
    ];
  }
}, De = {
  name: "abcd",
  totalStep: 5,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  createPointFigures: ({ coordinates: e }) => {
    let t = [], n = [];
    const r = ["A", "B", "C", "D"], a = e.map((s, o) => ({
      ...s,
      baseline: "bottom",
      text: `(${r[o]})`
    }));
    return e.length > 2 && (t = [e[0], e[2]], e.length > 3 && (n = [e[1], e[3]])), [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "line",
        attrs: [{ coordinates: t }, { coordinates: n }],
        styles: { style: "dashed" }
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: a
      }
    ];
  }
}, Pe = {
  name: "xabcd",
  totalStep: 6,
  needDefaultPointFigure: !0,
  needDefaultXAxisFigure: !0,
  needDefaultYAxisFigure: !0,
  styles: {
    polygon: {
      color: "rgba(22, 119, 255, 0.15)"
    }
  },
  createPointFigures: ({ coordinates: e, overlay: t }) => {
    const n = [], r = [], a = ["X", "A", "B", "C", "D"], s = e.map((o, i) => ({
      ...o,
      baseline: "bottom",
      text: `(${a[i]})`
    }));
    return e.length > 2 && (n.push({ coordinates: [e[0], e[2]] }), r.push({ coordinates: [e[0], e[1], e[2]] }), e.length > 3 && (n.push({ coordinates: [e[1], e[3]] }), e.length > 4 && (n.push({ coordinates: [e[2], e[4]] }), r.push({ coordinates: [e[2], e[3], e[4]] })))), [
      {
        type: "line",
        attrs: { coordinates: e }
      },
      {
        type: "line",
        attrs: n,
        styles: { style: "dashed" }
      },
      {
        type: "polygon",
        ignoreEvent: !0,
        attrs: r
      },
      {
        type: "text",
        ignoreEvent: !0,
        attrs: s
      }
    ];
  }
}, Be = [
  de,
  pe,
  ve,
  be,
  _e,
  $e,
  Le,
  xe,
  ke,
  Ae,
  we,
  Me,
  Se,
  Te,
  Ie,
  De,
  Pe
];
class Cu {
  constructor(t) {
    C1(this, "_apiKey");
    C1(this, "_prevSymbolMarket");
    C1(this, "_ws");
    this._apiKey = t;
  }
  async searchSymbols(t) {
    return await ((await (await fetch(`https://api.polygon.io/v3/reference/tickers?apiKey=${this._apiKey}&active=true&search=${t ?? ""}`)).json()).results || []).map((a) => ({
      ticker: a.ticker,
      name: a.name,
      shortName: a.ticker,
      market: a.market,
      exchange: a.primary_exchange,
      priceCurrency: a.currency_name,
      type: a.type,
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAA66SURBVHic7Z17cFTVGcB/527AiKGgRA0ShGhKoQjFMb4qUMCMPIrWqdbHSEdlHDGgI9V2aq2d1hmKtVbRsSTGEcQRp4pStaZQlNYUwYLiSKU0SCMBDRCmoQSJGGF3T/84d2VZk+w9d899hf3NMBnl3ns+5vtyHt/5HoIehpQIaijDYjiSciRlwCCgBCgG+gNFQCGCAvUScaADaAfagFagBdiFoAlBI0m2UkWTEMgA/lmeIYIWIFdkLQNJMBbBJUjOA8agFOwF7cAmBO8hWUeMtWIWezwayxciZwByGb1pZTyCaUguA0YGLNIWBK8jWUExa8Q1HA5YHi0iYQByGTH2UYnkBmA6cHLQMnXBfqAOwXMMYLW4hkTQAmUj1AYgqzkLuAXBTUgGBi2PFoI9SJYAT4nZbA9anK4IpQHIhUzE4i4k04OWxQiCOpI8IubwZtCiZBIqA5A1TEdyH3Bh0LJ4xAYE80QVdUELkiIUBiCf4FIk85FcELQsviB4B8G94jb+GrwoASKfZBgJHkUyNUg5AkOwkhhzxa1sC06EAJALKUJwL3A30DsIGULEYeBhJPPFHNr9Htx3A5A1TECyGCjze+yQ04Rgpqii3s9BfTMAWUsfksxD8iO/xowkggVY3Cdmccif4XxAPskw4rwCjPBjvB5AAwVc6cfewPJ6AFnNzcTZSF75OowgzkZZzc1eD+SZAUiJkNX8FlgM9PVqnB5MX2CxrOa3Uno3U3vyYVlLPxIshR7iyQueOmLMELM4YPrDxg1A1jKQJKuQjDL97eMawWYsJpu+fjZqAPL3DMFiNVBu8rt5vqSRJJXidnaa+qAxA5CPU0aMvwFDTX0zT6fsIMEkcQdNJj5mxADs3/x68sr3ix0kmWBiJsjZAOyQrDXkp32/aSTG+Fz3BDkZgKylH0neym/4AkJtDMflcjpw7QeQEkGCpXnlB4hkFAmW5uIncO8IquFB8uf8MDDd1oUrXFmO7aJc7HbQPJ4wU8zmad2XtA3AvtjZSN69GzYOUkCF7gWSlgHIWvqQyF/shJgGYlToXCXr7QGSzCOv/DAzwtaRYxzPAHYkT+jCmvN0gmCi08giRwZgx/B9QD6MKyo0IRntJMbQ2RKgAjjzyo8OZbbOspJ1BrB3/ZvJR+9GjcMUMCrbqSD7DJDgUfLKjyK9bd11S7czgHyCS0my2pxMIaHvUCgshl5FUFQKQtWJ4FALHGmHz5rhizY43BaomEawqOwuA6mg25cl840L5DexQiithNMvhNMvglMr4IT+zt5t3QS762H332FXfTQNQumwy1zLLmcAO1HzNU+E8oNTK+AbN8KwGc4V3h3JODS9Av98GPauz/17fiK4vKuE1K4NoJr1RDFLd+BY+PYCOK3CuzH2rof3fg07Q5Pkm40NYjYXdfYXnRqAXMhEBH/zVibDFBbDRQ/AiFv8G3PbUlhTpfYNYUcyqbP6BJ2fAizu8lwgkwwcC9c3+Kt8UMvLtZuhZKy/47qhC51+ZQawy7J85LlApjhjAkx7Te3ogyIZhz9PhebQH5jOzixX09kM4POvUQ6cdTVc/kawygewCmDKy2omCjdf0e0xM4BdjeuTSBRk6jtUTb9BKz+djlZ4eRy0bQ1aks4R7GEAg9Orlx07A6hSbOFXPsCkp8OlfFAb0UnaQTn+IRnIPirT/1dBxgM3+CqQW0beptZ+NyTj0LIW9m6A//0L2puP/l1RKXytHAZ9RzmNYoX63z/9IrU53LbUnXxeo3S8KvWfXy4BdgXOFsJbhFFhFcAPP4E+JXrvJeOw+TH44NFjld4VfUrg3Htg5Cx9QzjUAn8YEVbP4X6KKUlVND26BLQynrArH9TGT1f5h1pg+fnw9o+dKT/1zrq58MeL4UCj3nh9StQsFU5OtnUNpBuAYFog4ugy5Lt6z3/RBq9OVH59N7RuUu93tOq9N3KWu/H8IE3XRw1AFV4OP2dO0Xt+4/2578o/a1YePx36DoXiMbmN6xVpurbAzu8Lvup2dgqL1R+nHGmHLU+YGfujl/RnkUGV2Z8JhpG2zu0ZIEHoPRgA9NPMP21eDYkOc+M3LNJ7/rTzzI1tGlvnygAElwQqjFPc7MZNouvq1TVYP7F1rgxAddrIkw3dvYTOcuU3ts4L7B47Id2tZHBwh97zXvwGNr4AfU539uyhvebHN8cYKREiUrd/sUK49XPnzyfj8FyZ87P/8cfZFhbDg5bCMYkOdSRzilUAFz/knTxRx2K4hYxYaZcdmmFY5ddBxa88ESXySMotu69edNi+XP+d838Jlz4bvtvDoJGUWaimitFhz1p3a/qwGXBdg/qZJ8UgC9VRMzokOuDdX7h7t6hUzQTX2fGDbq57exYlQlbzb6KY83/1uyr2PxeOtKtY/w+fUQkgybgJyaJEg5DV7IaIRAGlc8o58P1/mFvXj7SrOP+df4aP/6J/+xdN9ghZzadEtd7PmVNg6mvquGeSZFzNCB8th8bnwxrYYYKDQlZzGOgVtCSuGXELjK8xbwQpEh3KCLbURi8lLDtHhKwhiYcNCXzhzClw2YveH/N218O796ufPQGB7BkGANB/OEx9Wf30mubV8NYd4Q3/dopAWkh6xta3bSssO1clbZqMAeiM0kq45n3lYfRq6fEDSTzam8Cu6FcOYx/XDx9zw+56eON687EH/nDQAv+7VXrOgUaVq/fyOHXO9/J8f8YE+N6b4Q7+6Jr26DqCdOhXDufcrgpGmCgW0RmHWuCVcfoh5MHSIGQ1a4BxQUviC7FCtSycdRUMmW7eGNq2wkvnR6NegOItIatZBvwgaEl8xypQ03f5tcooTio1892ddbDicjPf8p4XC4BdQUsRCMm4Os6lAj1PrYCzr1bLhG7mUTpDpsM3boIPl5iQ0mt2WQgz3aciz383wvp74NnBsOoH7jOJAC5ZAL092muYRNBkIYjUrsVzknHY/hK8eK77490J/WH0XPOymUbQaJEk4u4sD2l8Hl4YBZ+syv5sJqPmhN9JlGSrRRVN9ERfgCk6WmHlldCyTu+9wmL3NQz8oZ0qmiwhkEAOC95xQKIDVl2tf7wbPNkbecywSQikmqME7yFDnB/Yq0jVBXDK5y0qqMMkh1rgg8fgvJ87fyes2cGgdE6qRIxkHXBnkPJ0i27tnb3rzRsAKLeyjgGE2T2sdG7nBsZYG6gw2dD15Zty6mTy3416z+fiT/AaW+cWgN1/dkugAnXHZ816629RqXeJmTqZSeGNOt6S6jmcXiLm9cDEcYLuJcsQj5qanhji32qnpOk6vUTMikCEcYru9DvMg4p3/cr1zvY6s4WfpOn6qAEUswbYH4Q8jtB1xpRWmp8Fvq6ZVfTpDrPjm2G/rWsgzQDsunHhLYD/8V9UxS8dxj1ubiN2UimMuVvvnX2hdK/UpWoEQmapWMFzvovjlCPt+jV6+g5V0Tp9h+Y2dp8SuMJFUeqPXbiQvSZDx8cawABWI9TuMJS8/xv9jJ3+w1VR6dFz3fnmB09RGUi60cZftIWvfLwqFn2MUMcYgLiGBJIlvgqlQ0crvP0T/fd6Fakr2hv3qJ+Dp3R/TDzlHPjmbXDVuzB9pbsZpGGR99HJukiWpFcKh6g2jJhWp18xtDMOtSglpa58+5QcbSeXC+3N6hYxfCllX2kY0XnPoBpeQ+LRQdoAJ5Wq7OCwetpWXB6+hlKCOlHFV2LVOu8ZlOQRzwXKhc+aVf3eMMbiNywKn/KhS51Gu21c/+Fqlx+WmWD7cnjjujDWGeiybVzXvYMF8zwTxxRtW1Usfi7xe6b48JmwKr9bXXbfO7iGDUguMC+RYawCuGAefOtu/8OwjrSrjOF//s7fcZ0ieEdUdT2Td9893GEP+sBJxlVE7/Mj1J29XzS9qnb7YVU+ZNVh1rRwWcMKJFPNSeQDp5yjHD/l15qvGZDoUEbWsCh8jp5MBCtFVfeNQLIbwJMMI85moLcxwfwilQo2eLJq5uQ2ROuLNnUbuX05/CcyJWMOU8AocSvbunvIUWEIWc184GdGxAqSXkWqzWvxGCgcoJw+J2Y4flI3eAd3qq5i+zZFLeEzxQNidvYl3JkBLKQIwQcQsaqixy9NSEaLOdnD/bvfBNqIObQjmJm7XHl8QTDTifLBoQEAiCrqESxwL1UeXxAsEFXUO33csQHYT98HNGiKlMc/GmwdOUa7Oph9KthIT6srFH0OUkBFtl1/JnozAGAPEN4kkuOXO3WVDy4MAEDM5mkg34ojPDxk60Qb1wUi7WZTf4IQxw0cH9RRxRV2kq82rmYAACGQxJiBYLPbb+TJEcFmYsxwq3zIwQAAxCwOYDEZ8lVGAqARi8liFgdy+UhOBgB2XmGSSmBHrt/K45gdJKlM5fflQs4GACBuZycJJpE3Aj/YQYJJ4nZ2mviYEQMAEHfQRJIJ5JcDL2kkyQRxh7nKbsbLxMtaBpJkFZJRpr99XCPYbK/5RhN3jM0AKcQs9mAxjjDnGUaPOizGmVY+eDADpLD9BA8CLlJ58qTxEFX8NJejXnd43ilEVnMz8Bj5uwNdDgJ3uvXwOcWXVjH2BdIr9PSy9OZooIAr3fj2dTG+B+gMcSvbiFGRjydwgGABMf1bPffD+YysYQKSxeTDyzJpQjBTJ5jDBL7MAOmIKuqRjAYegKOVKo5jDgMPIBntt/IhgBkgHfkkw0jwaOTyDkwhWEmMuX5N952LEALkE1yKZH4k0tBMIHgHwb3iNv4avCghQtYwHcl9hD0r2T0bEMwTVeFxkoXKAFLIhUzE4q5QF6nQQVBHkkfEHN4MWpRMQmkAKexyNbcguAkZsRb3gj12vaWnMsuyhIlQG0AKuYwY+6hEcgMqBO3koGXqgv1AHYLnGMDqzIJMYSQSBpCOXEZvWhmPYBqSy4CRAYu0BcHrSFZQzJr0IoxRIHIGkImsZSAJxiK4BMl5wBjAqz7y7cAmu8HGOmKs9eKGzk8ibwCZ2LeQZVgMR1KOpAwYBJQAxUB/lIEUIr5smBEHOlAKbgNagRZgF4ImBI0k2UoVTV7dygXF/wF+fTz59Jc5ygAAAABJRU5ErkJggg=="
    }));
  }
  async getHistoryKLineData(t, n, r, a) {
    return await ((await (await fetch(`https://api.polygon.io/v2/aggs/ticker/${t.ticker}/range/${n.multiplier}/${n.timespan}/${r}/${a}?apiKey=${this._apiKey}`)).json()).results || []).map((i) => ({
      timestamp: i.t,
      open: i.o,
      high: i.h,
      low: i.l,
      close: i.c,
      volume: i.v,
      turnover: i.vw
    }));
  }
  subscribe(t, n, r) {
    var a, s;
    this._prevSymbolMarket !== t.market ? ((a = this._ws) == null || a.close(), this._ws = new WebSocket(`wss://delayed.polygon.io/${t.market}`), this._ws.onopen = () => {
      var o;
      (o = this._ws) == null || o.send(JSON.stringify({ action: "auth", params: this._apiKey }));
    }, this._ws.onmessage = (o) => {
      var c;
      const i = JSON.parse(o.data);
      i[0].ev === "status" ? i[0].status === "auth_success" && ((c = this._ws) == null || c.send(JSON.stringify({ action: "subscribe", params: `T.${t.ticker}` }))) : "sym" in i && r({
        timestamp: i.s,
        open: i.o,
        high: i.h,
        low: i.l,
        close: i.c,
        volume: i.v,
        turnover: i.vw
      });
    }) : (s = this._ws) == null || s.send(JSON.stringify({ action: "subscribe", params: `T.${t.ticker}` })), this._prevSymbolMarket = t.market;
  }
  unsubscribe(t, n) {
  }
}
const Oe = (e, t) => e === t, m0 = Symbol("solid-proxy"), Ee = Symbol("solid-track"), z1 = {
  equals: Oe
};
let k9 = T9;
const i1 = 1, U1 = 2, A9 = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, u0 = {};
var E = null;
let f0 = null, Ne = null, T = null, z = null, a1 = null, e0 = 0;
function R1(e, t) {
  const n = T, r = E, a = e.length === 0, s = t === void 0 ? r : t, o = a ? A9 : {
    owned: null,
    cleanups: null,
    context: s ? s.context : null,
    owner: s
  }, i = a ? e : () => e(() => W(() => n0(o)));
  E = o, T = null;
  try {
    return o1(i, !0);
  } finally {
    T = n, E = r;
  }
}
function b(e, t) {
  t = t ? Object.assign({}, z1, t) : z1;
  const n = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, r = (a) => (typeof a == "function" && (a = a(n.value)), S9(n, a));
  return [M9.bind(n), r];
}
function K0(e, t, n) {
  const r = t0(e, t, !0, i1);
  h1(r);
}
function j(e, t, n) {
  const r = t0(e, t, !1, i1);
  h1(r);
}
function r1(e, t, n) {
  k9 = ze;
  const r = t0(e, t, !1, i1);
  (!n || !n.render) && (r.user = !0), a1 ? a1.push(r) : h1(r);
}
function N(e, t, n) {
  n = n ? Object.assign({}, z1, n) : z1;
  const r = t0(e, t, !0, 0);
  return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, h1(r), M9.bind(r);
}
function Ke(e) {
  return e && typeof e == "object" && "then" in e;
}
function je(e, t, n) {
  let r, a, s;
  arguments.length === 2 && typeof t == "object" || arguments.length === 1 ? (r = !0, a = e, s = t || {}) : (r = e, a = t, s = n || {});
  let o = null, i = u0, c = !1, f = "initialValue" in s, l = typeof r == "function" && N(r);
  const y = /* @__PURE__ */ new Set(), [d, $] = (s.storage || b)(s.initialValue), [I, F] = b(void 0), [K, B] = b(void 0, {
    equals: !1
  }), [Q, D] = b(f ? "ready" : "unresolved");
  function L(w, k, M, X) {
    return o === w && (o = null, X !== void 0 && (f = !0), (w === i || k === i) && s.onHydrated && queueMicrotask(() => s.onHydrated(X, {
      value: k
    })), i = u0, Y(k, M)), k;
  }
  function Y(w, k) {
    o1(() => {
      k === void 0 && $(() => w), D(k !== void 0 ? "errored" : f ? "ready" : "unresolved"), F(k);
      for (const M of y.keys())
        M.decrement();
      y.clear();
    }, !1);
  }
  function q() {
    const w = Qe, k = d(), M = I();
    if (M !== void 0 && !o)
      throw M;
    return T && !T.user && w && K0(() => {
      K(), o && (w.resolved || y.has(w) || (w.increment(), y.add(w)));
    }), k;
  }
  function G(w = !0) {
    if (w !== !1 && c)
      return;
    c = !1;
    const k = l ? l() : r;
    if (k == null || k === !1) {
      L(o, W(d));
      return;
    }
    const M = i !== u0 ? i : W(() => a(k, {
      value: d(),
      refetching: w
    }));
    return Ke(M) ? (o = M, "value" in M ? (M.status === "success" ? L(o, M.value, void 0, k) : L(o, void 0, void 0, k), M) : (c = !0, queueMicrotask(() => c = !1), o1(() => {
      D(f ? "refreshing" : "pending"), B();
    }, !1), M.then((X) => L(M, X, void 0, k), (X) => L(M, void 0, D9(X), k)))) : (L(o, M, void 0, k), M);
  }
  return Object.defineProperties(q, {
    state: {
      get: () => Q()
    },
    error: {
      get: () => I()
    },
    loading: {
      get() {
        const w = Q();
        return w === "pending" || w === "refreshing";
      }
    },
    latest: {
      get() {
        if (!f)
          return q();
        const w = I();
        if (w && !o)
          throw w;
        return d();
      }
    }
  }), l ? K0(() => G(!1)) : G(!1), [q, {
    refetch: G,
    mutate: $
  }];
}
function W(e) {
  if (T === null)
    return e();
  const t = T;
  T = null;
  try {
    return e();
  } finally {
    T = t;
  }
}
function w9(e) {
  r1(() => W(e));
}
function L0(e) {
  return E === null || (E.cleanups === null ? E.cleanups = [e] : E.cleanups.push(e)), e;
}
function Fe(e) {
  const t = T, n = E;
  return Promise.resolve().then(() => {
    T = t, E = n;
    let r;
    return o1(e, !1), T = E = null, r ? r.done : void 0;
  });
}
let Qe;
function M9() {
  if (this.sources && this.state)
    if (this.state === i1)
      h1(this);
    else {
      const e = z;
      z = null, o1(() => V1(this), !1), z = e;
    }
  if (T) {
    const e = this.observers ? this.observers.length : 0;
    T.sources ? (T.sources.push(this), T.sourceSlots.push(e)) : (T.sources = [this], T.sourceSlots = [e]), this.observers ? (this.observers.push(T), this.observerSlots.push(T.sources.length - 1)) : (this.observers = [T], this.observerSlots = [T.sources.length - 1]);
  }
  return this.value;
}
function S9(e, t, n) {
  let r = e.value;
  return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && o1(() => {
    for (let a = 0; a < e.observers.length; a += 1) {
      const s = e.observers[a], o = f0 && f0.running;
      o && f0.disposed.has(s), (o ? !s.tState : !s.state) && (s.pure ? z.push(s) : a1.push(s), s.observers && I9(s)), o || (s.state = i1);
    }
    if (z.length > 1e6)
      throw z = [], new Error();
  }, !1)), t;
}
function h1(e) {
  if (!e.fn)
    return;
  n0(e);
  const t = e0;
  Re(e, e.value, t);
}
function Re(e, t, n) {
  let r;
  const a = E, s = T;
  T = E = e;
  try {
    r = e.fn(t);
  } catch (o) {
    return e.pure && (e.state = i1, e.owned && e.owned.forEach(n0), e.owned = null), e.updatedAt = n + 1, P9(o);
  } finally {
    T = s, E = a;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? S9(e, r) : e.value = r, e.updatedAt = n);
}
function t0(e, t, n, r = i1, a) {
  const s = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: E,
    context: E ? E.context : null,
    pure: n
  };
  return E === null || E !== A9 && (E.owned ? E.owned.push(s) : E.owned = [s]), s;
}
function Y1(e) {
  if (e.state === 0)
    return;
  if (e.state === U1)
    return V1(e);
  if (e.suspense && W(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < e0); )
    e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (e = t[n], e.state === i1)
      h1(e);
    else if (e.state === U1) {
      const r = z;
      z = null, o1(() => V1(e, t[0]), !1), z = r;
    }
}
function o1(e, t) {
  if (z)
    return e();
  let n = !1;
  t || (z = []), a1 ? n = !0 : a1 = [], e0++;
  try {
    const r = e();
    return Ze(n), r;
  } catch (r) {
    n || (a1 = null), z = null, P9(r);
  }
}
function Ze(e) {
  if (z && (T9(z), z = null), e)
    return;
  const t = a1;
  a1 = null, t.length && o1(() => k9(t), !1);
}
function T9(e) {
  for (let t = 0; t < e.length; t++)
    Y1(e[t]);
}
function ze(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? e[n++] = r : Y1(r);
  }
  for (t = 0; t < n; t++)
    Y1(e[t]);
}
function V1(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const r = e.sources[n];
    if (r.sources) {
      const a = r.state;
      a === i1 ? r !== t && (!r.updatedAt || r.updatedAt < e0) && Y1(r) : a === U1 && V1(r, t);
    }
  }
}
function I9(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = U1, n.pure ? z.push(n) : a1.push(n), n.observers && I9(n));
  }
}
function n0(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(), r = e.sourceSlots.pop(), a = n.observers;
      if (a && a.length) {
        const s = a.pop(), o = n.observerSlots.pop();
        r < a.length && (s.sourceSlots[o] = r, a[r] = s, n.observerSlots[r] = o);
      }
    }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--)
      n0(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--)
      e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function D9(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function P9(e, t = E) {
  throw D9(e);
}
const Ue = Symbol("fallback");
function j0(e) {
  for (let t = 0; t < e.length; t++)
    e[t]();
}
function Ye(e, t, n = {}) {
  let r = [], a = [], s = [], o = 0, i = t.length > 1 ? [] : null;
  return L0(() => j0(s)), () => {
    let c = e() || [], f, l;
    return c[Ee], W(() => {
      let d = c.length, $, I, F, K, B, Q, D, L, Y;
      if (d === 0)
        o !== 0 && (j0(s), s = [], r = [], a = [], o = 0, i && (i = [])), n.fallback && (r = [Ue], a[0] = R1((q) => (s[0] = q, n.fallback())), o = 1);
      else if (o === 0) {
        for (a = new Array(d), l = 0; l < d; l++)
          r[l] = c[l], a[l] = R1(y);
        o = d;
      } else {
        for (F = new Array(d), K = new Array(d), i && (B = new Array(d)), Q = 0, D = Math.min(o, d); Q < D && r[Q] === c[Q]; Q++)
          ;
        for (D = o - 1, L = d - 1; D >= Q && L >= Q && r[D] === c[L]; D--, L--)
          F[L] = a[D], K[L] = s[D], i && (B[L] = i[D]);
        for ($ = /* @__PURE__ */ new Map(), I = new Array(L + 1), l = L; l >= Q; l--)
          Y = c[l], f = $.get(Y), I[l] = f === void 0 ? -1 : f, $.set(Y, l);
        for (f = Q; f <= D; f++)
          Y = r[f], l = $.get(Y), l !== void 0 && l !== -1 ? (F[l] = a[f], K[l] = s[f], i && (B[l] = i[f]), l = I[l], $.set(Y, l)) : s[f]();
        for (l = Q; l < d; l++)
          l in F ? (a[l] = F[l], s[l] = K[l], i && (i[l] = B[l], i[l](l))) : a[l] = R1(y);
        a = a.slice(0, o = d), r = c.slice(0);
      }
      return a;
    });
    function y(d) {
      if (s[l] = d, i) {
        const [$, I] = b(l);
        return i[l] = I, t(c[l], $);
      }
      return t(c[l]);
    }
  };
}
function h(e, t) {
  return W(() => e(t || {}));
}
function j1() {
  return !0;
}
const Ve = {
  get(e, t, n) {
    return t === m0 ? n : e.get(t);
  },
  has(e, t) {
    return t === m0 ? !0 : e.has(t);
  },
  set: j1,
  deleteProperty: j1,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: j1,
      deleteProperty: j1
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function y0(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function He() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const n = this[e]();
    if (n !== void 0)
      return n;
  }
}
function B9(...e) {
  let t = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    t = t || !!i && m0 in i, e[o] = typeof i == "function" ? (t = !0, N(i)) : i;
  }
  if (t)
    return new Proxy({
      get(o) {
        for (let i = e.length - 1; i >= 0; i--) {
          const c = y0(e[i])[o];
          if (c !== void 0)
            return c;
        }
      },
      has(o) {
        for (let i = e.length - 1; i >= 0; i--)
          if (o in y0(e[i]))
            return !0;
        return !1;
      },
      keys() {
        const o = [];
        for (let i = 0; i < e.length; i++)
          o.push(...Object.keys(y0(e[i])));
        return [...new Set(o)];
      }
    }, Ve);
  const n = {}, r = /* @__PURE__ */ Object.create(null);
  for (let o = e.length - 1; o >= 0; o--) {
    const i = e[o];
    if (!i)
      continue;
    const c = Object.getOwnPropertyNames(i);
    for (let f = c.length - 1; f >= 0; f--) {
      const l = c[f];
      if (l === "__proto__" || l === "constructor")
        continue;
      const y = Object.getOwnPropertyDescriptor(i, l);
      if (!r[l])
        r[l] = y.get ? {
          enumerable: !0,
          configurable: !0,
          get: He.bind(n[l] = [y.get.bind(i)])
        } : y.value !== void 0 ? y : void 0;
      else {
        const d = n[l];
        d && (y.get ? d.push(y.get.bind(i)) : y.value !== void 0 && d.push(() => y.value));
      }
    }
  }
  const a = {}, s = Object.keys(r);
  for (let o = s.length - 1; o >= 0; o--) {
    const i = s[o], c = r[i];
    c && c.get ? Object.defineProperty(a, i, c) : a[i] = c ? c.value : void 0;
  }
  return a;
}
const Ge = (e) => `Stale read from <${e}>.`;
function Xe(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return N(Ye(() => e.each, e.children, t || void 0));
}
function Z(e) {
  const t = e.keyed, n = N(() => e.when, void 0, {
    equals: (r, a) => t ? r === a : !r == !a
  });
  return N(() => {
    const r = n();
    if (r) {
      const a = e.children;
      return typeof a == "function" && a.length > 0 ? W(() => a(t ? r : () => {
        if (!W(n))
          throw Ge("Show");
        return e.when;
      })) : a;
    }
    return e.fallback;
  }, void 0, void 0);
}
function Je(e, t, n) {
  let r = n.length, a = t.length, s = r, o = 0, i = 0, c = t[a - 1].nextSibling, f = null;
  for (; o < a || i < s; ) {
    if (t[o] === n[i]) {
      o++, i++;
      continue;
    }
    for (; t[a - 1] === n[s - 1]; )
      a--, s--;
    if (a === o) {
      const l = s < r ? i ? n[i - 1].nextSibling : n[s - i] : c;
      for (; i < s; )
        e.insertBefore(n[i++], l);
    } else if (s === i)
      for (; o < a; )
        (!f || !f.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === n[s - 1] && n[i] === t[a - 1]) {
      const l = t[--a].nextSibling;
      e.insertBefore(n[i++], t[o++].nextSibling), e.insertBefore(n[--s], l), t[a] = n[s];
    } else {
      if (!f) {
        f = /* @__PURE__ */ new Map();
        let y = i;
        for (; y < s; )
          f.set(n[y], y++);
      }
      const l = f.get(t[o]);
      if (l != null)
        if (i < l && l < s) {
          let y = o, d = 1, $;
          for (; ++y < a && y < s && !(($ = f.get(t[y])) == null || $ !== l + d); )
            d++;
          if (d > l - i) {
            const I = t[o];
            for (; i < l; )
              e.insertBefore(n[i++], I);
          } else
            e.replaceChild(n[i++], t[o++]);
        } else
          o++;
      else
        t[o++].remove();
    }
  }
}
const F0 = "_$DX_DELEGATE";
function We(e, t, n, r = {}) {
  let a;
  return R1((s) => {
    a = s, t === document ? e() : v(t, e(), t.firstChild ? null : void 0, n);
  }, r.owner), () => {
    a(), t.textContent = "";
  };
}
function C(e, t, n) {
  let r;
  const a = () => {
    const o = document.createElement("template");
    return o.innerHTML = e, n ? o.content.firstChild.firstChild : o.content.firstChild;
  }, s = t ? () => W(() => document.importNode(r || (r = a()), !0)) : () => (r || (r = a())).cloneNode(!0);
  return s.cloneNode = s, s;
}
function e1(e, t = window.document) {
  const n = t[F0] || (t[F0] = /* @__PURE__ */ new Set());
  for (let r = 0, a = e.length; r < a; r++) {
    const s = e[r];
    n.has(s) || (n.add(s), t.addEventListener(s, qe));
  }
}
function U(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function f1(e, t) {
  t == null ? e.removeAttribute("class") : e.className = t;
}
function H1(e, t, n, r) {
  if (r)
    Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const a = n[0];
    e.addEventListener(t, n[0] = (s) => a.call(e, n[1], s));
  } else
    e.addEventListener(t, n);
}
function d1(e, t, n) {
  if (!t)
    return n ? U(e, "style") : t;
  const r = e.style;
  if (typeof t == "string")
    return r.cssText = t;
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), t || (t = {});
  let a, s;
  for (s in n)
    t[s] == null && r.removeProperty(s), delete n[s];
  for (s in t)
    a = t[s], a !== n[s] && (r.setProperty(s, a), n[s] = a);
  return n;
}
function x0(e, t, n) {
  return W(() => e(t, n));
}
function v(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function")
    return G1(e, t, r, n);
  j((a) => G1(e, t(), a, n), r);
}
function qe(e) {
  const t = `$$${e.type}`;
  let n = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== n && Object.defineProperty(e, "target", {
    configurable: !0,
    value: n
  }), Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return n || document;
    }
  }); n; ) {
    const r = n[t];
    if (r && !n.disabled) {
      const a = n[`${t}Data`];
      if (a !== void 0 ? r.call(n, a, e) : r.call(n, e), e.cancelBubble)
        return;
    }
    n = n._$host || n.parentNode || n.host;
  }
}
function G1(e, t, n, r, a) {
  for (; typeof n == "function"; )
    n = n();
  if (t === n)
    return n;
  const s = typeof t, o = r !== void 0;
  if (e = o && n[0] && n[0].parentNode || e, s === "string" || s === "number")
    if (s === "number" && (t = t.toString()), o) {
      let i = n[0];
      i && i.nodeType === 3 ? i.data !== t && (i.data = t) : i = document.createTextNode(t), n = m1(e, n, r, i);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  else if (t == null || s === "boolean")
    n = m1(e, n, r);
  else {
    if (s === "function")
      return j(() => {
        let i = t();
        for (; typeof i == "function"; )
          i = i();
        n = G1(e, i, n, r);
      }), () => n;
    if (Array.isArray(t)) {
      const i = [], c = n && Array.isArray(n);
      if (h0(i, t, n, a))
        return j(() => n = G1(e, i, n, r, !0)), () => n;
      if (i.length === 0) {
        if (n = m1(e, n, r), o)
          return n;
      } else
        c ? n.length === 0 ? Q0(e, i, r) : Je(e, n, i) : (n && m1(e), Q0(e, i));
      n = i;
    } else if (t.nodeType) {
      if (Array.isArray(n)) {
        if (o)
          return n = m1(e, n, r, t);
        m1(e, n, null, t);
      } else
        n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function h0(e, t, n, r) {
  let a = !1;
  for (let s = 0, o = t.length; s < o; s++) {
    let i = t[s], c = n && n[s], f;
    if (!(i == null || i === !0 || i === !1))
      if ((f = typeof i) == "object" && i.nodeType)
        e.push(i);
      else if (Array.isArray(i))
        a = h0(e, i, c) || a;
      else if (f === "function")
        if (r) {
          for (; typeof i == "function"; )
            i = i();
          a = h0(e, Array.isArray(i) ? i : [i], Array.isArray(c) ? c : [c]) || a;
        } else
          e.push(i), a = !0;
      else {
        const l = String(i);
        c && c.nodeType === 3 && c.data === l ? e.push(c) : e.push(document.createTextNode(l));
      }
  }
  return a;
}
function Q0(e, t, n = null) {
  for (let r = 0, a = t.length; r < a; r++)
    e.insertBefore(t[r], n);
}
function m1(e, t, n, r) {
  if (n === void 0)
    return e.textContent = "";
  const a = r || document.createTextNode("");
  if (t.length) {
    let s = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const i = t[o];
      if (a !== i) {
        const c = i.parentNode === e;
        !s && !o ? c ? e.replaceChild(a, i) : e.insertBefore(a, n) : c && i.remove();
      } else
        s = !0;
    }
  } else
    e.insertBefore(a, n);
  return [a];
}
var F1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function O9(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var e5 = typeof F1 == "object" && F1 && F1.Object === Object && F1, E9 = e5, t5 = E9, n5 = typeof self == "object" && self && self.Object === Object && self, r5 = t5 || n5 || Function("return this")(), t1 = r5, a5 = t1, i5 = a5.Symbol, r0 = i5, R0 = r0, N9 = Object.prototype, s5 = N9.hasOwnProperty, o5 = N9.toString, T1 = R0 ? R0.toStringTag : void 0;
function c5(e) {
  var t = s5.call(e, T1), n = e[T1];
  try {
    e[T1] = void 0;
    var r = !0;
  } catch {
  }
  var a = o5.call(e);
  return r && (t ? e[T1] = n : delete e[T1]), a;
}
var l5 = c5, u5 = Object.prototype, f5 = u5.toString;
function y5(e) {
  return f5.call(e);
}
var g5 = y5, Z0 = r0, C5 = l5, m5 = g5, h5 = "[object Null]", d5 = "[object Undefined]", z0 = Z0 ? Z0.toStringTag : void 0;
function p5(e) {
  return e == null ? e === void 0 ? d5 : h5 : z0 && z0 in Object(e) ? C5(e) : m5(e);
}
var D1 = p5;
function v5(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var p1 = v5, _5 = D1, b5 = p1, $5 = "[object AsyncFunction]", L5 = "[object Function]", x5 = "[object GeneratorFunction]", k5 = "[object Proxy]";
function A5(e) {
  if (!b5(e))
    return !1;
  var t = _5(e);
  return t == L5 || t == x5 || t == $5 || t == k5;
}
var K9 = A5, w5 = t1, M5 = w5["__core-js_shared__"], S5 = M5, g0 = S5, U0 = function() {
  var e = /[^.]+$/.exec(g0 && g0.keys && g0.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function T5(e) {
  return !!U0 && U0 in e;
}
var I5 = T5, D5 = Function.prototype, P5 = D5.toString;
function B5(e) {
  if (e != null) {
    try {
      return P5.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var j9 = B5, O5 = K9, E5 = I5, N5 = p1, K5 = j9, j5 = /[\\^$.*+?()[\]{}|]/g, F5 = /^\[object .+?Constructor\]$/, Q5 = Function.prototype, R5 = Object.prototype, Z5 = Q5.toString, z5 = R5.hasOwnProperty, U5 = RegExp(
  "^" + Z5.call(z5).replace(j5, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Y5(e) {
  if (!N5(e) || E5(e))
    return !1;
  var t = O5(e) ? U5 : F5;
  return t.test(K5(e));
}
var V5 = Y5;
function H5(e, t) {
  return e == null ? void 0 : e[t];
}
var G5 = H5, X5 = V5, J5 = G5;
function W5(e, t) {
  var n = J5(e, t);
  return X5(n) ? n : void 0;
}
var y1 = W5, q5 = y1, e6 = function() {
  try {
    var e = q5(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), t6 = e6, Y0 = t6;
function n6(e, t, n) {
  t == "__proto__" && Y0 ? Y0(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var F9 = n6;
function r6(e, t) {
  return e === t || e !== e && t !== t;
}
var Q9 = r6, a6 = F9, i6 = Q9, s6 = Object.prototype, o6 = s6.hasOwnProperty;
function c6(e, t, n) {
  var r = e[t];
  (!(o6.call(e, t) && i6(r, n)) || n === void 0 && !(t in e)) && a6(e, t, n);
}
var k0 = c6, l6 = Array.isArray, v1 = l6;
function u6(e) {
  return e != null && typeof e == "object";
}
var _1 = u6, f6 = D1, y6 = _1, g6 = "[object Symbol]";
function C6(e) {
  return typeof e == "symbol" || y6(e) && f6(e) == g6;
}
var A0 = C6, m6 = v1, h6 = A0, d6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, p6 = /^\w*$/;
function v6(e, t) {
  if (m6(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || h6(e) ? !0 : p6.test(e) || !d6.test(e) || t != null && e in Object(t);
}
var _6 = v6, b6 = y1, $6 = b6(Object, "create"), a0 = $6, V0 = a0;
function L6() {
  this.__data__ = V0 ? V0(null) : {}, this.size = 0;
}
var x6 = L6;
function k6(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var A6 = k6, w6 = a0, M6 = "__lodash_hash_undefined__", S6 = Object.prototype, T6 = S6.hasOwnProperty;
function I6(e) {
  var t = this.__data__;
  if (w6) {
    var n = t[e];
    return n === M6 ? void 0 : n;
  }
  return T6.call(t, e) ? t[e] : void 0;
}
var D6 = I6, P6 = a0, B6 = Object.prototype, O6 = B6.hasOwnProperty;
function E6(e) {
  var t = this.__data__;
  return P6 ? t[e] !== void 0 : O6.call(t, e);
}
var N6 = E6, K6 = a0, j6 = "__lodash_hash_undefined__";
function F6(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = K6 && t === void 0 ? j6 : t, this;
}
var Q6 = F6, R6 = x6, Z6 = A6, z6 = D6, U6 = N6, Y6 = Q6;
function b1(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
b1.prototype.clear = R6;
b1.prototype.delete = Z6;
b1.prototype.get = z6;
b1.prototype.has = U6;
b1.prototype.set = Y6;
var V6 = b1;
function H6() {
  this.__data__ = [], this.size = 0;
}
var G6 = H6, X6 = Q9;
function J6(e, t) {
  for (var n = e.length; n--; )
    if (X6(e[n][0], t))
      return n;
  return -1;
}
var i0 = J6, W6 = i0, q6 = Array.prototype, e3 = q6.splice;
function t3(e) {
  var t = this.__data__, n = W6(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : e3.call(t, n, 1), --this.size, !0;
}
var n3 = t3, r3 = i0;
function a3(e) {
  var t = this.__data__, n = r3(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var i3 = a3, s3 = i0;
function o3(e) {
  return s3(this.__data__, e) > -1;
}
var c3 = o3, l3 = i0;
function u3(e, t) {
  var n = this.__data__, r = l3(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var f3 = u3, y3 = G6, g3 = n3, C3 = i3, m3 = c3, h3 = f3;
function $1(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
$1.prototype.clear = y3;
$1.prototype.delete = g3;
$1.prototype.get = C3;
$1.prototype.has = m3;
$1.prototype.set = h3;
var s0 = $1, d3 = y1, p3 = t1, v3 = d3(p3, "Map"), w0 = v3, H0 = V6, _3 = s0, b3 = w0;
function $3() {
  this.size = 0, this.__data__ = {
    hash: new H0(),
    map: new (b3 || _3)(),
    string: new H0()
  };
}
var L3 = $3;
function x3(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var k3 = x3, A3 = k3;
function w3(e, t) {
  var n = e.__data__;
  return A3(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var o0 = w3, M3 = o0;
function S3(e) {
  var t = M3(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var T3 = S3, I3 = o0;
function D3(e) {
  return I3(this, e).get(e);
}
var P3 = D3, B3 = o0;
function O3(e) {
  return B3(this, e).has(e);
}
var E3 = O3, N3 = o0;
function K3(e, t) {
  var n = N3(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var j3 = K3, F3 = L3, Q3 = T3, R3 = P3, Z3 = E3, z3 = j3;
function L1(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
L1.prototype.clear = F3;
L1.prototype.delete = Q3;
L1.prototype.get = R3;
L1.prototype.has = Z3;
L1.prototype.set = z3;
var R9 = L1, Z9 = R9, U3 = "Expected a function";
function M0(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(U3);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, r);
    return n.cache = s.set(a, o) || s, o;
  };
  return n.cache = new (M0.Cache || Z9)(), n;
}
M0.Cache = Z9;
var Y3 = M0, V3 = Y3, H3 = 500;
function G3(e) {
  var t = V3(e, function(r) {
    return n.size === H3 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var X3 = G3, J3 = X3, W3 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, q3 = /\\(\\)?/g, e2 = J3(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(W3, function(n, r, a, s) {
    t.push(a ? s.replace(q3, "$1") : r || n);
  }), t;
}), t2 = e2;
function n2(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var r2 = n2, G0 = r0, a2 = r2, i2 = v1, s2 = A0, o2 = 1 / 0, X0 = G0 ? G0.prototype : void 0, J0 = X0 ? X0.toString : void 0;
function z9(e) {
  if (typeof e == "string")
    return e;
  if (i2(e))
    return a2(e, z9) + "";
  if (s2(e))
    return J0 ? J0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -o2 ? "-0" : t;
}
var c2 = z9, l2 = c2;
function u2(e) {
  return e == null ? "" : l2(e);
}
var f2 = u2, y2 = v1, g2 = _6, C2 = t2, m2 = f2;
function h2(e, t) {
  return y2(e) ? e : g2(e, t) ? [e] : C2(m2(e));
}
var d2 = h2, p2 = 9007199254740991, v2 = /^(?:0|[1-9]\d*)$/;
function _2(e, t) {
  var n = typeof e;
  return t = t ?? p2, !!t && (n == "number" || n != "symbol" && v2.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var U9 = _2, b2 = A0, $2 = 1 / 0;
function L2(e) {
  if (typeof e == "string" || b2(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -$2 ? "-0" : t;
}
var x2 = L2, k2 = k0, A2 = d2, w2 = U9, W0 = p1, M2 = x2;
function S2(e, t, n, r) {
  if (!W0(e))
    return e;
  t = A2(t, e);
  for (var a = -1, s = t.length, o = s - 1, i = e; i != null && ++a < s; ) {
    var c = M2(t[a]), f = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var l = i[c];
      f = r ? r(l, c, i) : void 0, f === void 0 && (f = W0(l) ? l : w2(t[a + 1]) ? [] : {});
    }
    k2(i, c, f), i = i[c];
  }
  return e;
}
var T2 = S2, I2 = T2;
function D2(e, t, n) {
  return e == null ? e : I2(e, t, n);
}
var P2 = D2;
const d0 = /* @__PURE__ */ O9(P2);
var B2 = s0;
function O2() {
  this.__data__ = new B2(), this.size = 0;
}
var E2 = O2;
function N2(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var K2 = N2;
function j2(e) {
  return this.__data__.get(e);
}
var F2 = j2;
function Q2(e) {
  return this.__data__.has(e);
}
var R2 = Q2, Z2 = s0, z2 = w0, U2 = R9, Y2 = 200;
function V2(e, t) {
  var n = this.__data__;
  if (n instanceof Z2) {
    var r = n.__data__;
    if (!z2 || r.length < Y2 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new U2(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var H2 = V2, G2 = s0, X2 = E2, J2 = K2, W2 = F2, q2 = R2, e8 = H2;
function x1(e) {
  var t = this.__data__ = new G2(e);
  this.size = t.size;
}
x1.prototype.clear = X2;
x1.prototype.delete = J2;
x1.prototype.get = W2;
x1.prototype.has = q2;
x1.prototype.set = e8;
var t8 = x1;
function n8(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var r8 = n8, a8 = k0, i8 = F9;
function s8(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var i = t[s], c = r ? r(n[i], e[i], i, n, e) : void 0;
    c === void 0 && (c = e[i]), a ? i8(n, i, c) : a8(n, i, c);
  }
  return n;
}
var c0 = s8;
function o8(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var c8 = o8, l8 = D1, u8 = _1, f8 = "[object Arguments]";
function y8(e) {
  return u8(e) && l8(e) == f8;
}
var g8 = y8, q0 = g8, C8 = _1, Y9 = Object.prototype, m8 = Y9.hasOwnProperty, h8 = Y9.propertyIsEnumerable, d8 = q0(function() {
  return arguments;
}()) ? q0 : function(e) {
  return C8(e) && m8.call(e, "callee") && !h8.call(e, "callee");
}, p8 = d8, X1 = { exports: {} };
function v8() {
  return !1;
}
var _8 = v8;
X1.exports;
(function(e, t) {
  var n = t1, r = _8, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, o = s && s.exports === a, i = o ? n.Buffer : void 0, c = i ? i.isBuffer : void 0, f = c || r;
  e.exports = f;
})(X1, X1.exports);
var V9 = X1.exports, b8 = 9007199254740991;
function $8(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= b8;
}
var H9 = $8, L8 = D1, x8 = H9, k8 = _1, A8 = "[object Arguments]", w8 = "[object Array]", M8 = "[object Boolean]", S8 = "[object Date]", T8 = "[object Error]", I8 = "[object Function]", D8 = "[object Map]", P8 = "[object Number]", B8 = "[object Object]", O8 = "[object RegExp]", E8 = "[object Set]", N8 = "[object String]", K8 = "[object WeakMap]", j8 = "[object ArrayBuffer]", F8 = "[object DataView]", Q8 = "[object Float32Array]", R8 = "[object Float64Array]", Z8 = "[object Int8Array]", z8 = "[object Int16Array]", U8 = "[object Int32Array]", Y8 = "[object Uint8Array]", V8 = "[object Uint8ClampedArray]", H8 = "[object Uint16Array]", G8 = "[object Uint32Array]", S = {};
S[Q8] = S[R8] = S[Z8] = S[z8] = S[U8] = S[Y8] = S[V8] = S[H8] = S[G8] = !0;
S[A8] = S[w8] = S[j8] = S[M8] = S[F8] = S[S8] = S[T8] = S[I8] = S[D8] = S[P8] = S[B8] = S[O8] = S[E8] = S[N8] = S[K8] = !1;
function X8(e) {
  return k8(e) && x8(e.length) && !!S[L8(e)];
}
var J8 = X8;
function W8(e) {
  return function(t) {
    return e(t);
  };
}
var S0 = W8, J1 = { exports: {} };
J1.exports;
(function(e, t) {
  var n = E9, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s && n.process, i = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(J1, J1.exports);
var T0 = J1.exports, q8 = J8, et = S0, e9 = T0, t9 = e9 && e9.isTypedArray, tt = t9 ? et(t9) : q8, nt = tt, rt = c8, at = p8, it = v1, st = V9, ot = U9, ct = nt, lt = Object.prototype, ut = lt.hasOwnProperty;
function ft(e, t) {
  var n = it(e), r = !n && at(e), a = !n && !r && st(e), s = !n && !r && !a && ct(e), o = n || r || a || s, i = o ? rt(e.length, String) : [], c = i.length;
  for (var f in e)
    (t || ut.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    ot(f, c))) && i.push(f);
  return i;
}
var G9 = ft, yt = Object.prototype;
function gt(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || yt;
  return e === n;
}
var I0 = gt;
function Ct(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var X9 = Ct, mt = X9, ht = mt(Object.keys, Object), dt = ht, pt = I0, vt = dt, _t = Object.prototype, bt = _t.hasOwnProperty;
function $t(e) {
  if (!pt(e))
    return vt(e);
  var t = [];
  for (var n in Object(e))
    bt.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Lt = $t, xt = K9, kt = H9;
function At(e) {
  return e != null && kt(e.length) && !xt(e);
}
var J9 = At, wt = G9, Mt = Lt, St = J9;
function Tt(e) {
  return St(e) ? wt(e) : Mt(e);
}
var D0 = Tt, It = c0, Dt = D0;
function Pt(e, t) {
  return e && It(t, Dt(t), e);
}
var Bt = Pt;
function Ot(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Et = Ot, Nt = p1, Kt = I0, jt = Et, Ft = Object.prototype, Qt = Ft.hasOwnProperty;
function Rt(e) {
  if (!Nt(e))
    return jt(e);
  var t = Kt(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Qt.call(e, r)) || n.push(r);
  return n;
}
var Zt = Rt, zt = G9, Ut = Zt, Yt = J9;
function Vt(e) {
  return Yt(e) ? zt(e, !0) : Ut(e);
}
var P0 = Vt, Ht = c0, Gt = P0;
function Xt(e, t) {
  return e && Ht(t, Gt(t), e);
}
var Jt = Xt, W1 = { exports: {} };
W1.exports;
(function(e, t) {
  var n = t1, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s ? n.Buffer : void 0, i = o ? o.allocUnsafe : void 0;
  function c(f, l) {
    if (l)
      return f.slice();
    var y = f.length, d = i ? i(y) : new f.constructor(y);
    return f.copy(d), d;
  }
  e.exports = c;
})(W1, W1.exports);
var Wt = W1.exports;
function qt(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var e7 = qt;
function t7(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (s[a++] = o);
  }
  return s;
}
var n7 = t7;
function r7() {
  return [];
}
var W9 = r7, a7 = n7, i7 = W9, s7 = Object.prototype, o7 = s7.propertyIsEnumerable, n9 = Object.getOwnPropertySymbols, c7 = n9 ? function(e) {
  return e == null ? [] : (e = Object(e), a7(n9(e), function(t) {
    return o7.call(e, t);
  }));
} : i7, B0 = c7, l7 = c0, u7 = B0;
function f7(e, t) {
  return l7(e, u7(e), t);
}
var y7 = f7;
function g7(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var q9 = g7, C7 = X9, m7 = C7(Object.getPrototypeOf, Object), ee = m7, h7 = q9, d7 = ee, p7 = B0, v7 = W9, _7 = Object.getOwnPropertySymbols, b7 = _7 ? function(e) {
  for (var t = []; e; )
    h7(t, p7(e)), e = d7(e);
  return t;
} : v7, te = b7, $7 = c0, L7 = te;
function x7(e, t) {
  return $7(e, L7(e), t);
}
var k7 = x7, A7 = q9, w7 = v1;
function M7(e, t, n) {
  var r = t(e);
  return w7(e) ? r : A7(r, n(e));
}
var ne = M7, S7 = ne, T7 = B0, I7 = D0;
function D7(e) {
  return S7(e, I7, T7);
}
var P7 = D7, B7 = ne, O7 = te, E7 = P0;
function N7(e) {
  return B7(e, E7, O7);
}
var K7 = N7, j7 = y1, F7 = t1, Q7 = j7(F7, "DataView"), R7 = Q7, Z7 = y1, z7 = t1, U7 = Z7(z7, "Promise"), Y7 = U7, V7 = y1, H7 = t1, G7 = V7(H7, "Set"), X7 = G7, J7 = y1, W7 = t1, q7 = J7(W7, "WeakMap"), en = q7, p0 = R7, v0 = w0, _0 = Y7, b0 = X7, $0 = en, re = D1, k1 = j9, r9 = "[object Map]", tn = "[object Object]", a9 = "[object Promise]", i9 = "[object Set]", s9 = "[object WeakMap]", o9 = "[object DataView]", nn = k1(p0), rn = k1(v0), an = k1(_0), sn = k1(b0), on = k1($0), u1 = re;
(p0 && u1(new p0(new ArrayBuffer(1))) != o9 || v0 && u1(new v0()) != r9 || _0 && u1(_0.resolve()) != a9 || b0 && u1(new b0()) != i9 || $0 && u1(new $0()) != s9) && (u1 = function(e) {
  var t = re(e), n = t == tn ? e.constructor : void 0, r = n ? k1(n) : "";
  if (r)
    switch (r) {
      case nn:
        return o9;
      case rn:
        return r9;
      case an:
        return a9;
      case sn:
        return i9;
      case on:
        return s9;
    }
  return t;
});
var O0 = u1, cn = Object.prototype, ln = cn.hasOwnProperty;
function un(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && ln.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var fn = un, yn = t1, gn = yn.Uint8Array, Cn = gn, c9 = Cn;
function mn(e) {
  var t = new e.constructor(e.byteLength);
  return new c9(t).set(new c9(e)), t;
}
var E0 = mn, hn = E0;
function dn(e, t) {
  var n = t ? hn(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var pn = dn, vn = /\w*$/;
function _n(e) {
  var t = new e.constructor(e.source, vn.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var bn = _n, l9 = r0, u9 = l9 ? l9.prototype : void 0, f9 = u9 ? u9.valueOf : void 0;
function $n(e) {
  return f9 ? Object(f9.call(e)) : {};
}
var Ln = $n, xn = E0;
function kn(e, t) {
  var n = t ? xn(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var An = kn, wn = E0, Mn = pn, Sn = bn, Tn = Ln, In = An, Dn = "[object Boolean]", Pn = "[object Date]", Bn = "[object Map]", On = "[object Number]", En = "[object RegExp]", Nn = "[object Set]", Kn = "[object String]", jn = "[object Symbol]", Fn = "[object ArrayBuffer]", Qn = "[object DataView]", Rn = "[object Float32Array]", Zn = "[object Float64Array]", zn = "[object Int8Array]", Un = "[object Int16Array]", Yn = "[object Int32Array]", Vn = "[object Uint8Array]", Hn = "[object Uint8ClampedArray]", Gn = "[object Uint16Array]", Xn = "[object Uint32Array]";
function Jn(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Fn:
      return wn(e);
    case Dn:
    case Pn:
      return new r(+e);
    case Qn:
      return Mn(e, n);
    case Rn:
    case Zn:
    case zn:
    case Un:
    case Yn:
    case Vn:
    case Hn:
    case Gn:
    case Xn:
      return In(e, n);
    case Bn:
      return new r();
    case On:
    case Kn:
      return new r(e);
    case En:
      return Sn(e);
    case Nn:
      return new r();
    case jn:
      return Tn(e);
  }
}
var Wn = Jn, qn = p1, y9 = Object.create, er = function() {
  function e() {
  }
  return function(t) {
    if (!qn(t))
      return {};
    if (y9)
      return y9(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), tr = er, nr = tr, rr = ee, ar = I0;
function ir(e) {
  return typeof e.constructor == "function" && !ar(e) ? nr(rr(e)) : {};
}
var sr = ir, or = O0, cr = _1, lr = "[object Map]";
function ur(e) {
  return cr(e) && or(e) == lr;
}
var fr = ur, yr = fr, gr = S0, g9 = T0, C9 = g9 && g9.isMap, Cr = C9 ? gr(C9) : yr, mr = Cr, hr = O0, dr = _1, pr = "[object Set]";
function vr(e) {
  return dr(e) && hr(e) == pr;
}
var _r = vr, br = _r, $r = S0, m9 = T0, h9 = m9 && m9.isSet, Lr = h9 ? $r(h9) : br, xr = Lr, kr = t8, Ar = r8, wr = k0, Mr = Bt, Sr = Jt, Tr = Wt, Ir = e7, Dr = y7, Pr = k7, Br = P7, Or = K7, Er = O0, Nr = fn, Kr = Wn, jr = sr, Fr = v1, Qr = V9, Rr = mr, Zr = p1, zr = xr, Ur = D0, Yr = P0, Vr = 1, Hr = 2, Gr = 4, ae = "[object Arguments]", Xr = "[object Array]", Jr = "[object Boolean]", Wr = "[object Date]", qr = "[object Error]", ie = "[object Function]", e4 = "[object GeneratorFunction]", t4 = "[object Map]", n4 = "[object Number]", se = "[object Object]", r4 = "[object RegExp]", a4 = "[object Set]", i4 = "[object String]", s4 = "[object Symbol]", o4 = "[object WeakMap]", c4 = "[object ArrayBuffer]", l4 = "[object DataView]", u4 = "[object Float32Array]", f4 = "[object Float64Array]", y4 = "[object Int8Array]", g4 = "[object Int16Array]", C4 = "[object Int32Array]", m4 = "[object Uint8Array]", h4 = "[object Uint8ClampedArray]", d4 = "[object Uint16Array]", p4 = "[object Uint32Array]", A = {};
A[ae] = A[Xr] = A[c4] = A[l4] = A[Jr] = A[Wr] = A[u4] = A[f4] = A[y4] = A[g4] = A[C4] = A[t4] = A[n4] = A[se] = A[r4] = A[a4] = A[i4] = A[s4] = A[m4] = A[h4] = A[d4] = A[p4] = !0;
A[qr] = A[ie] = A[o4] = !1;
function Z1(e, t, n, r, a, s) {
  var o, i = t & Vr, c = t & Hr, f = t & Gr;
  if (n && (o = a ? n(e, r, a, s) : n(e)), o !== void 0)
    return o;
  if (!Zr(e))
    return e;
  var l = Fr(e);
  if (l) {
    if (o = Nr(e), !i)
      return Ir(e, o);
  } else {
    var y = Er(e), d = y == ie || y == e4;
    if (Qr(e))
      return Tr(e, i);
    if (y == se || y == ae || d && !a) {
      if (o = c || d ? {} : jr(e), !i)
        return c ? Pr(e, Sr(o, e)) : Dr(e, Mr(o, e));
    } else {
      if (!A[y])
        return a ? e : {};
      o = Kr(e, y, i);
    }
  }
  s || (s = new kr());
  var $ = s.get(e);
  if ($)
    return $;
  s.set(e, o), zr(e) ? e.forEach(function(K) {
    o.add(Z1(K, t, n, K, e, s));
  }) : Rr(e) && e.forEach(function(K, B) {
    o.set(B, Z1(K, t, n, B, e, s));
  });
  var I = f ? c ? Or : Br : c ? Yr : Ur, F = l ? void 0 : I(e);
  return Ar(F || e, function(K, B) {
    F && (B = K, K = e[B]), wr(o, B, Z1(K, t, n, B, e, s));
  }), o;
}
var v4 = Z1, _4 = v4, b4 = 1, $4 = 4;
function L4(e) {
  return _4(e, b4 | $4);
}
var x4 = L4;
const k4 = /* @__PURE__ */ O9(x4);
var A4 = /* @__PURE__ */ C("<button>");
const w4 = (e) => (() => {
  var t = A4();
  return H1(t, "click", e.onClick, !0), v(t, () => e.children), j((n) => {
    var r = e.style, a = `klinecharts-pro-button ${e.type ?? "confirm"} ${e.class ?? ""}`;
    return n.e = d1(t, r, n.e), a !== n.t && f1(t, n.t = a), n;
  }, {
    e: void 0,
    t: void 0
  }), t;
})();
e1(["click"]);
var M4 = /* @__PURE__ */ C('<svg viewBox="0 0 1024 1024"class=icon><path d="M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m-353.706667 567.04a42.496 42.496 0 0 1-60.16 0L243.626667 541.866667c-8.106667-8.106667-12.373333-18.773333-12.373334-29.866667s4.693333-22.186667 12.373334-29.866667a42.496 42.496 0 0 1 60.16 0L426.666667 604.586667l293.546666-293.546667a42.496 42.496 0 1 1 60.16 60.16l-323.413333 323.84z">'), S4 = /* @__PURE__ */ C('<svg viewBox="0 0 1024 1024"class=icon><path d="M245.333333 128h533.333334A117.333333 117.333333 0 0 1 896 245.333333v533.333334A117.333333 117.333333 0 0 1 778.666667 896H245.333333A117.333333 117.333333 0 0 1 128 778.666667V245.333333A117.333333 117.333333 0 0 1 245.333333 128z m0 64c-29.44 0-53.333333 23.893333-53.333333 53.333333v533.333334c0 29.44 23.893333 53.333333 53.333333 53.333333h533.333334c29.44 0 53.333333-23.893333 53.333333-53.333333V245.333333c0-29.44-23.893333-53.333333-53.333333-53.333333H245.333333z">'), T4 = /* @__PURE__ */ C("<div>"), I4 = /* @__PURE__ */ C("<span class=label>");
const D4 = () => M4(), P4 = () => S4(), d9 = (e) => {
  const [t, n] = b(e.checked ?? !1);
  return r1(() => {
    "checked" in e && n(e.checked);
  }), (() => {
    var r = T4();
    return r.$$click = (a) => {
      const s = !t();
      e.onChange && e.onChange(s), n(s);
    }, v(r, (() => {
      var a = N(() => !!t());
      return () => a() ? h(D4, {}) : h(P4, {});
    })(), null), v(r, (() => {
      var a = N(() => !!e.label);
      return () => a() && (() => {
        var s = I4();
        return v(s, () => e.label), s;
      })();
    })(), null), j((a) => {
      var s = e.style, o = `klinecharts-pro-checkbox ${t() && "checked" || ""} ${e.class || ""}`;
      return a.e = d1(r, s, a.e), o !== a.t && f1(r, a.t = o), a;
    }, {
      e: void 0,
      t: void 0
    }), r;
  })();
};
e1(["click"]);
var B4 = /* @__PURE__ */ C("<div class=klinecharts-pro-loading><i class=circle1></i><i class=circle2></i><i class=circle3>");
const oe = () => B4();
var O4 = /* @__PURE__ */ C('<div class=klinecharts-pro-empty><svg class=icon viewBox="0 0 1024 1024"><path d="M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z">');
const E4 = () => O4();
var N4 = /* @__PURE__ */ C("<ul>"), K4 = /* @__PURE__ */ C("<li>");
const q1 = (e) => (() => {
  var t = N4();
  return v(t, h(Z, {
    get when() {
      return e.loading;
    },
    get children() {
      return h(oe, {});
    }
  }), null), v(t, h(Z, {
    get when() {
      var n;
      return !e.loading && !e.children && !((n = e.dataSource) != null && n.length);
    },
    get children() {
      return h(E4, {});
    }
  }), null), v(t, h(Z, {
    get when() {
      return e.children;
    },
    get children() {
      return e.children;
    }
  }), null), v(t, h(Z, {
    get when() {
      return !e.children;
    },
    get children() {
      var n;
      return (n = e.dataSource) == null ? void 0 : n.map((r) => {
        var a;
        return ((a = e.renderItem) == null ? void 0 : a.call(e, r)) ?? K4();
      });
    }
  }), null), j((n) => {
    var r = e.style, a = `klinecharts-pro-list ${e.class ?? ""}`;
    return n.e = d1(t, r, n.e), a !== n.t && f1(t, n.t = a), n;
  }, {
    e: void 0,
    t: void 0
  }), t;
})();
var j4 = /* @__PURE__ */ C('<div class=klinecharts-pro-modal><div class=inner><div class=title-container><svg class=close-icon viewBox="0 0 1024 1024"><path d="M934.184927 199.723787 622.457206 511.452531l311.727721 311.703161c14.334473 14.229073 23.069415 33.951253 23.069415 55.743582 0 43.430138-35.178197 78.660524-78.735226 78.660524-21.664416 0-41.361013-8.865925-55.642275-23.069415L511.149121 622.838388 199.420377 934.490384c-14.204513 14.20349-33.901111 23.069415-55.642275 23.069415-43.482327 0-78.737272-35.230386-78.737272-78.660524 0-21.792329 8.864902-41.513486 23.094998-55.743582l311.677579-311.703161L88.135828 199.723787c-14.230096-14.255679-23.094998-33.92567-23.094998-55.642275 0-43.430138 35.254945-78.762855 78.737272-78.762855 21.741163 0 41.437761 8.813736 55.642275 23.069415l311.727721 311.727721L822.876842 88.389096c14.281261-14.255679 33.977859-23.069415 55.642275-23.069415 43.557028 0 78.735226 35.332716 78.735226 78.762855C957.254342 165.798117 948.5194 185.468109 934.184927 199.723787"></path></svg></div><div class=content-container>'), F4 = /* @__PURE__ */ C("<div class=button-container>");
const A1 = (e) => (() => {
  var t = j4(), n = t.firstChild, r = n.firstChild, a = r.firstChild, s = r.nextSibling;
  return v(r, () => e.title, a), H1(a, "click", e.onClose, !0), v(s, () => e.children), v(n, (() => {
    var o = N(() => !!(e.buttons && e.buttons.length > 0));
    return () => o() && (() => {
      var i = F4();
      return v(i, () => e.buttons.map((c) => h(w4, B9(c, {
        get children() {
          return c.children;
        }
      })))), i;
    })();
  })(), null), j(() => `${e.width ?? 400}px` != null ? n.style.setProperty("width", `${e.width ?? 400}px`) : n.style.removeProperty("width")), t;
})();
e1(["click"]);
var Q4 = /* @__PURE__ */ C("<div tabindex=0><div class=selector-container><span class=value></span><i class=arrow>"), R4 = /* @__PURE__ */ C("<div class=drop-down-container><ul>"), Z4 = /* @__PURE__ */ C("<li>");
const ce = (e) => {
  const [t, n] = b(!1);
  return (() => {
    var r = Q4(), a = r.firstChild, s = a.firstChild;
    return r.addEventListener("blur", (o) => {
      n(!1);
    }), r.$$click = (o) => {
      n((i) => !i);
    }, v(s, () => e.value), v(r, (() => {
      var o = N(() => !!(e.dataSource && e.dataSource.length > 0));
      return () => o() && (() => {
        var i = R4(), c = i.firstChild;
        return v(c, () => e.dataSource.map((f) => {
          const y = f[e.valueKey ?? "text"] ?? f;
          return (() => {
            var d = Z4();
            return d.$$click = ($) => {
              var I;
              $.stopPropagation(), e.value !== y && ((I = e.onSelected) == null || I.call(e, f)), n(!1);
            }, v(d, y), d;
          })();
        })), i;
      })();
    })(), null), j((o) => {
      var i = e.style, c = `klinecharts-pro-select ${e.class ?? ""} ${t() ? "klinecharts-pro-select-show" : ""}`;
      return o.e = d1(r, i, o.e), c !== o.t && f1(r, o.t = c), o;
    }, {
      e: void 0,
      t: void 0
    }), r;
  })();
};
e1(["click"]);
var z4 = /* @__PURE__ */ C("<span class=prefix>"), U4 = /* @__PURE__ */ C("<span class=suffix>"), Y4 = /* @__PURE__ */ C("<div><input class=value>");
const le = (e) => {
  const t = B9({
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER
  }, e);
  let n;
  const [r, a] = b("normal");
  return (() => {
    var s = Y4(), o = s.firstChild;
    return s.$$click = () => {
      n == null || n.focus();
    }, v(s, h(Z, {
      get when() {
        return t.prefix;
      },
      get children() {
        var i = z4();
        return v(i, () => t.prefix), i;
      }
    }), o), o.addEventListener("change", (i) => {
      var f, l;
      const c = i.target.value;
      if ("precision" in t) {
        let y;
        const d = Math.max(0, Math.floor(t.precision));
        d <= 0 ? y = new RegExp(/^[1-9]\d*$/) : y = new RegExp("^\\d+\\.?\\d{0," + d + "}$"), (c === "" || y.test(c) && +c >= t.min && +c <= t.max) && ((f = t.onChange) == null || f.call(t, c === "" ? c : +c));
      } else
        (l = t.onChange) == null || l.call(t, c);
    }), o.addEventListener("blur", () => {
      a("normal");
    }), o.addEventListener("focus", () => {
      a("focus");
    }), x0((i) => {
      n = i;
    }, o), v(s, h(Z, {
      get when() {
        return t.suffix;
      },
      get children() {
        var i = U4();
        return v(i, () => t.suffix), i;
      }
    }), null), j((i) => {
      var c = t.style, f = `klinecharts-pro-input ${t.class ?? ""}`, l = r(), y = t.placeholder ?? "";
      return i.e = d1(s, c, i.e), f !== i.t && f1(s, i.t = f), l !== i.a && U(s, "data-status", i.a = l), y !== i.o && U(o, "placeholder", i.o = y), i;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), j(() => o.value = t.value), s;
  })();
};
e1(["click"]);
var V4 = /* @__PURE__ */ C("<div><i class=thumb>");
const H4 = (e) => (() => {
  var t = V4();
  return t.$$click = (n) => {
    e.onChange && e.onChange();
  }, j((n) => {
    var r = e.style, a = `klinecharts-pro-switch ${e.open ? "turn-on" : "turn-off"} ${e.class ?? ""}`;
    return n.e = d1(t, r, n.e), a !== n.t && f1(t, n.t = a), n;
  }, {
    e: void 0,
    t: void 0
  }), t;
})();
e1(["click"]);
var G4 = /* @__PURE__ */ C("<img alt=symbol>"), X4 = /* @__PURE__ */ C("<div class=symbol><span>"), J4 = /* @__PURE__ */ C('<div class=klinecharts-pro-period-bar><div class=menu-container><svg viewBox="0 0 1024 1024"><path d="M192.037 287.953h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32zM832.161 479.169H438.553c-17.673 0-32 14.327-32 32s14.327 32 32 32h393.608c17.673 0 32-14.327 32-32s-14.327-32-32-32zM832.161 735.802H192.037c-17.673 0-32 14.327-32 32s14.327 32 32 32h640.124c17.673 0 32-14.327 32-32s-14.327-32-32-32zM319.028 351.594l-160 160 160 160z">'), W4 = /* @__PURE__ */ C("<span>");
const q4 = (e) => {
  const [t, n] = b(!1), r = () => {
    n((a) => !a);
  };
  return w9(() => {
    document.addEventListener("fullscreenchange", r), document.addEventListener("mozfullscreenchange", r), document.addEventListener("webkitfullscreenchange", r), document.addEventListener("msfullscreenchange", r);
  }), L0(() => {
    document.removeEventListener("fullscreenchange", r), document.removeEventListener("mozfullscreenchange", r), document.removeEventListener("webkitfullscreenchange", r), document.removeEventListener("msfullscreenchange", r);
  }), (() => {
    var a = J4(), s = a.firstChild, o = s.firstChild;
    return x0((i) => {
    }, a), H1(o, "click", e.onMenuClick, !0), v(a, h(Z, {
      get when() {
        return e.symbol;
      },
      get children() {
        var i = X4(), c = i.firstChild;
        return H1(i, "click", e.onSymbolClick, !0), v(i, h(Z, {
          get when() {
            return e.symbol.logo;
          },
          get children() {
            var f = G4();
            return j(() => U(f, "src", e.symbol.logo)), f;
          }
        }), c), v(c, () => e.symbol.shortName ?? e.symbol.name ?? e.symbol.ticker), i;
      }
    }), null), v(a, () => e.periods.map((i) => (() => {
      var c = W4();
      return c.$$click = () => {
        e.onPeriodChange(i);
      }, v(c, () => i.text), j(() => f1(c, `item period ${i.text === e.period.text ? "selected" : ""}`)), c;
    })()), null), j(() => U(o, "class", e.spread ? "" : "rotate")), a;
  })();
};
e1(["click"]);
var ea = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M12.41465,11L18.5,11C18.7761,11,19,11.22386,19,11.5C19,11.77614,18.7761,12,18.5,12L12.41465,12C12.20873,12.5826,11.65311,13,11,13C10.34689,13,9.79127,12.5826,9.58535,12L3.5,12C3.223857,12,3,11.77614,3,11.5C3,11.22386,3.223857,11,3.5,11L9.58535,11C9.79127,10.417404,10.34689,10,11,10C11.65311,10,12.20873,10.417404,12.41465,11Z stroke-opacity=0 stroke=none>');
const ta = () => ea();
var na = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M6.91465,11L11.08535,11C11.29127,10.417404,11.84689,10,12.5,10C13.15311,10,13.70873,10.417404,13.91465,11L18.5,11C18.7761,11,19,11.22386,19,11.5C19,11.77614,18.7761,12,18.5,12L13.91465,12C13.70873,12.5826,13.15311,13,12.5,13C11.84689,13,11.29127,12.5826,11.08535,12L6.91465,12C6.70873,12.5826,6.15311,13,5.5,13C4.671573,13,4,12.32843,4,11.5C4,10.671573,4.671573,10,5.5,10C6.15311,10,6.70873,10.417404,6.91465,11Z stroke-opacity=0 stroke=none>');
const ra = () => na();
var aa = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M6.91465,12.5C6.70873,13.0826,6.15311,13.5,5.5,13.5C4.671573,13.5,4,12.82843,4,12C4,11.171573,4.671573,10.5,5.5,10.5C6.15311,10.5,6.70873,10.917404,6.91465,11.5L16.0853,11.5C16.2913,10.917404,16.846899999999998,10.5,17.5,10.5C18.328400000000002,10.5,19,11.171573,19,12C19,12.82843,18.328400000000002,13.5,17.5,13.5C16.846899999999998,13.5,16.2913,13.0826,16.0853,12.5L6.91465,12.5Z stroke-opacity=0 stroke=none>');
const ia = () => aa();
var sa = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11,12.41465L11,18.5C11,18.7761,11.22386,19,11.5,19C11.77614,19,12,18.7761,12,18.5L12,12.41465C12.5826,12.20873,13,11.65311,13,11C13,10.34689,12.5826,9.79127,12,9.58535L12,3.5C12,3.223857,11.77614,3,11.5,3C11.22386,3,11,3.223857,11,3.5L11,9.58535C10.417404,9.79127,10,10.34689,10,11C10,11.65311,10.417404,12.20873,11,12.41465Z stroke-opacity=0 stroke=none>');
const oa = () => sa();
var ca = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11.66558837890625,19C10.83716137890625,19,10.16558837890625,18.328400000000002,10.16558837890625,17.5C10.16558837890625,16.846899999999998,10.58298437890625,16.2913,11.16557337890625,16.0854L11.16557337890625,11.91464C10.58298437890625,11.70872,10.16558837890625,11.1531,10.16558837890625,10.5C10.16558837890625,9.8469,10.58298437890625,9.29128,11.16557337890625,9.08536L11.16557337890625,4.5C11.16557337890625,4.223857,11.38942837890625,4,11.66556837890625,4C11.94171837890625,4,12.16556837890625,4.223857,12.16556837890625,4.5L12.16556837890625,9.08535C12.74817837890625,9.291260000000001,13.16558837890625,9.846879999999999,13.16558837890625,10.5C13.16558837890625,11.153120000000001,12.74817837890625,11.708739999999999,12.16556837890625,11.91465L12.16556837890625,16.0854C12.74817837890625,16.2913,13.16558837890625,16.846899999999998,13.16558837890625,17.5C13.16558837890625,18.328400000000002,12.49401837890625,19,11.66558837890625,19Z stroke-opacity=0 stroke=none>');
const la = () => ca();
var ua = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11.165603637695312,6.91465C11.748203637695312,6.70873,12.165603637695312,6.15311,12.165603637695312,5.5C12.165603637695312,4.671573,11.494033637695313,4,10.665603637695312,4C9.837176637695313,4,9.165603637695312,4.671573,9.165603637695312,5.5C9.165603637695312,6.15311,9.583007637695312,6.70873,10.165603637695312,6.91465L10.165603637695312,16.0854C9.583007637695312,16.2913,9.165603637695312,16.846899999999998,9.165603637695312,17.5C9.165603637695312,18.328400000000002,9.837176637695313,19,10.665603637695312,19C11.494033637695313,19,12.165603637695312,18.328400000000002,12.165603637695312,17.5C12.165603637695312,16.846899999999998,11.748203637695312,16.2913,11.165603637695312,16.0854L11.165603637695312,6.91465Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const fa = () => ua();
var ya = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M5.146447,15.753C4.9511845,15.9483,4.9511845,16.2649,5.146447,16.4602C5.341709,16.6554,5.658291,16.6554,5.853554,16.4602L8.156600000000001,14.15711C8.352409999999999,14.25082,8.57173,14.3033,8.8033,14.3033C9.631730000000001,14.3033,10.3033,13.63172,10.3033,12.80329C10.3033,12.57172,10.250820000000001,12.352409999999999,10.157119999999999,12.15659L12.156600000000001,10.15711C12.352409999999999,10.250820000000001,12.571729999999999,10.30329,12.8033,10.30329C13.63173,10.30329,14.3033,9.63172,14.3033,8.80329C14.3033,8.57172,14.25082,8.352409999999999,14.15712,8.15659L16.4602,5.853553C16.6554,5.658291,16.6554,5.341709,16.4602,5.146447C16.2649,4.9511843,15.9483,4.9511843,15.753,5.146447L13.45001,7.449479999999999C13.25419,7.35577,13.03487,7.3032900000000005,12.8033,7.3032900000000005C11.97487,7.3032900000000005,11.3033,7.97487,11.3033,8.80329C11.3033,9.03487,11.35578,9.254190000000001,11.44949,9.450009999999999L9.450009999999999,11.449480000000001C9.254190000000001,11.35577,9.03487,11.30329,8.8033,11.30329C7.97487,11.30329,7.3033,11.97487,7.3033,12.80329C7.3033,13.03487,7.35578,13.25419,7.44949,13.45001L5.146447,15.753Z stroke-opacity=0 stroke=none>');
const ga = () => ya();
var Ca = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M7.573332939453125,14.54567903564453C7.667042939453125,14.741499035644532,7.719512939453125,14.960809035644532,7.719512939453125,15.19239903564453C7.719512939453125,16.02079903564453,7.047942939453125,16.69239903564453,6.219512939453125,16.69239903564453C5.391085939453125,16.69239903564453,4.719512939453125,16.02079903564453,4.719512939453125,15.19239903564453C4.719512939453125,14.36394903564453,5.391085939453125,13.692379035644532,6.219512939453125,13.692379035644532C6.451092939453125,13.692379035644532,6.670412939453125,13.74485903564453,6.866232939453125,13.83856903564453L9.865702939453126,10.83909903564453C9.771992939453124,10.643279035644532,9.719512939453125,10.42395903564453,9.719512939453125,10.192379035644532C9.719512939453125,9.36394903564453,10.391082939453124,8.692379035644532,11.219512939453125,8.692379035644532C11.451092939453126,8.692379035644532,11.670412939453126,8.74485903564453,11.866232939453125,8.838569035644532L15.462112939453124,5.242645035644531C15.657412939453126,5.047383335644532,15.974012939453125,5.047383335644532,16.169212939453125,5.242645035644531C16.364512939453125,5.437907035644531,16.364512939453125,5.754489035644531,16.169212939453125,5.949752035644531L12.573332939453124,9.545679035644532C12.667042939453125,9.74149903564453,12.719512939453125,9.96080903564453,12.719512939453125,10.192379035644532C12.719512939453125,11.020809035644533,12.047942939453126,11.692379035644532,11.219512939453125,11.692379035644532C10.987942939453125,11.692379035644532,10.768632939453125,11.639909035644532,10.572812939453126,11.54619903564453L7.573332939453125,14.54567903564453Z stroke-opacity=0 stroke=none>');
const ma = () => Ca();
var ha = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M15.719512939453125,8.461776733398438C16.547912939453127,8.461776733398438,17.219512939453125,7.7902067333984375,17.219512939453125,6.9617767333984375C17.219512939453125,6.133349733398438,16.547912939453127,5.4617767333984375,15.719512939453125,5.4617767333984375C14.891082939453124,5.4617767333984375,14.219512939453125,6.133349733398438,14.219512939453125,6.9617767333984375C14.219512939453125,7.193346733398437,14.271992939453124,7.412666733398438,14.365692939453124,7.608486733398438L7.366222939453126,14.607956733398437C7.170402939453125,14.514256733398437,6.951082939453125,14.461776733398438,6.719512939453125,14.461776733398438C5.891085939453125,14.461776733398438,5.219512939453125,15.133346733398437,5.219512939453125,15.961776733398438C5.219512939453125,16.79017673339844,5.891085939453125,17.461776733398438,6.719512939453125,17.461776733398438C7.547942939453125,17.461776733398438,8.219512939453125,16.79017673339844,8.219512939453125,15.961776733398438C8.219512939453125,15.730176733398437,8.167032939453126,15.510876733398437,8.073322939453124,15.315066733398437L15.072802939453124,8.315586733398437C15.268612939453124,8.409296733398438,15.487912939453125,8.461776733398438,15.719512939453125,8.461776733398438Z stroke-opacity=0 stroke=none>');
const da = () => ha();
var pa = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M17.0643,7.033864912109375L18,3.585784912109375L14.5078,4.509695912109375L15.3537,5.344934912109375L6.02026,14.560584912109375C5.87635,14.517484912109374,5.72366,14.494284912109375,5.5655,14.494284912109375C4.7009,14.494284912109375,4,15.186384912109375,4,16.040084912109375C4,16.893784912109375,4.7009,17.585784912109375,5.5655,17.585784912109375C6.43011,17.585784912109375,7.13101,16.893784912109375,7.13101,16.040084912109375C7.13101,15.722284912109375,7.03392,15.426984912109376,6.86744,15.181384912109374L16.0917,6.073604912109375L17.0643,7.033864912109375Z stroke-opacity=0 stroke=none>');
const va = () => pa();
var _a = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M6.91465,13.00505L18.5,13.00505C18.7761,13.00505,19,13.228909999999999,19,13.50505C19,13.781189999999999,18.7761,14.00505,18.5,14.00505L6.91465,14.00505C6.70873,14.58765,6.15311,15.00505,5.5,15.00505C4.671573,15.00505,4,14.33348,4,13.50505C4,12.67662,4.671573,12.00505,5.5,12.00505C6.15311,12.00505,6.70873,12.422450000000001,6.91465,13.00505ZM7.81404,11.625L10.48591,11.625L10.48591,10.90625L9.65193,10.90625L9.65193,7.125L8.997630000000001,7.125C8.71443,7.306641,8.415600000000001,7.419922,7.96443,7.498047L7.96443,8.05078L8.77497,8.05078L8.77497,10.90625L7.81404,10.90625L7.81404,11.625ZM11.081620000000001,11.625L14.0562,11.625L14.0562,10.88281L13.09724,10.88281C12.8863,10.88281,12.59333,10.90625,12.36482,10.93555C13.17537,10.11328,13.84724,9.2207,13.84724,8.39062C13.84724,7.541016,13.28865,7,12.4488,7C11.84333,7,11.446850000000001,7.234375,11.03279,7.679688L11.52497,8.16797C11.747630000000001,7.914062,12.0113,7.697266,12.33552,7.697266C12.7613,7.697266,13.00154,7.982422,13.00154,8.43359C13.00154,9.14648,12.29255,10.00781,11.081620000000001,11.11523L11.081620000000001,11.625ZM15.9605,11.75C16.8121,11.75,17.526899999999998,11.2832,17.526899999999998,10.4375C17.526899999999998,9.82031,17.142200000000003,9.43945,16.6441,9.30078L16.6441,9.27148C17.1129,9.08594,17.3824,8.7207,17.3824,8.21289C17.3824,7.421875,16.8004,7,15.9429,7C15.4215,7,14.9957,7.210938,14.6109,7.541016L15.066,8.11133C15.3258,7.849609,15.5836,7.697266,15.9019,7.697266C16.2789,7.697266,16.4957,7.914062,16.4957,8.28125C16.4957,8.70898,16.2301,9,15.4215,9L15.4215,9.63672C16.3804,9.63672,16.6383,9.91992,16.6383,10.38086C16.6383,10.79688,16.3336,11.03125,15.8824,11.03125C15.4742,11.03125,15.1578,10.82227,14.8922,10.55078L14.4781,11.13281C14.7906,11.486329999999999,15.2652,11.75,15.9605,11.75Z stroke-opacity=0 stroke=none>');
const ba = () => _a();
var $a = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M3.146447,14.178126025390625C2.9511847,13.982826025390626,2.9511847,13.666226025390625,3.146447,13.470926025390625L7.39146,9.225966025390626C7.35417,9.095106025390624,7.33421,8.956946025390625,7.33421,8.814116025390625C7.33421,7.985696025390625,8.00578,7.314116025390625,8.834209999999999,7.314116025390625C8.97703,7.314116025390625,9.11519,7.334086025390625,9.24605,7.371366025390625L13.753,2.864373025390625C13.9483,2.669110325390625,14.2649,2.669110325390625,14.4602,2.864373025390625C14.6554,3.059635025390625,14.6554,3.376217025390625,14.4602,3.571479025390625L10.06916,7.962476025390625C10.23631,8.204386025390626,10.334209999999999,8.497826025390625,10.334209999999999,8.814116025390625C10.334209999999999,9.642546025390626,9.66264,10.314116025390625,8.834209999999999,10.314116025390625C8.51791,10.314116025390625,8.22448,10.216226025390625,7.98256,10.049076025390626L3.853554,14.178126025390625C3.658291,14.373326025390625,3.341709,14.373326025390625,3.146447,14.178126025390625ZM7.67736,19.188526025390626C7.4821,18.993226025390626,7.4821,18.676626025390625,7.67736,18.481426025390626L9.9804,16.178326025390625C9.88669,15.982526025390625,9.834209999999999,15.763226025390624,9.834209999999999,15.531626025390626C9.834209999999999,14.703226025390626,10.50578,14.031626025390626,11.33421,14.031626025390626C11.56579,14.031626025390626,11.78511,14.084126025390624,11.98093,14.177826025390624L13.9804,12.178356025390626C13.8867,11.982536025390624,13.8342,11.763216025390625,13.8342,11.531636025390625C13.8342,10.703206025390624,14.5058,10.031636025390625,15.3342,10.031636025390625C15.5658,10.031636025390625,15.7851,10.084116025390625,15.9809,10.177826025390626L18.284,7.874796025390625C18.4792,7.679536025390625,18.7958,7.679536025390625,18.9911,7.874796025390625C19.1863,8.070056025390624,19.1863,8.386636025390626,18.9911,8.581906025390625L16.688000000000002,10.884936025390624C16.7817,11.080756025390626,16.8342,11.300066025390626,16.8342,11.531636025390625C16.8342,12.360066025390624,16.162599999999998,13.031626025390626,15.3342,13.031626025390626C15.1026,13.031626025390626,14.8833,12.979126025390626,14.6875,12.885426025390625L12.68803,14.884926025390625C12.78174,15.080726025390625,12.83421,15.300026025390626,12.83421,15.531626025390626C12.83421,16.360026025390624,12.16264,17.031626025390626,11.33421,17.031626025390626C11.10264,17.031626025390626,10.88333,16.979126025390627,10.68751,16.885426025390625L8.38446,19.188526025390626C8.1892,19.383726025390626,7.87262,19.383726025390626,7.67736,19.188526025390626Z stroke-opacity=0 stroke=none>');
const La = () => $a();
var xa = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M3.3367688759765626,12.63173C3.5320318759765623,12.82699,3.8486138759765627,12.82699,4.043876875976562,12.63173L11.822052875976562,4.853553C12.017312875976563,4.658291,12.017312875976563,4.341708,11.822052875976562,4.146446C11.626792875976562,3.9511843,11.310202875976563,3.9511843,11.114942875976563,4.146446L3.3367688759765626,11.92462C3.1415071759765625,12.11988,3.1415071759765625,12.43647,3.3367688759765626,12.63173ZM5.001492875976562,17.0351C4.806232875976562,16.8399,4.806232875976562,16.5233,5.001492875976562,16.328L7.304532875976562,14.025C7.210822875976563,13.82916,7.158352875976563,13.60984,7.158352875976563,13.37827C7.158352875976563,12.54984,7.829922875976562,11.87827,8.658352875976561,11.87827C8.889922875976563,11.87827,9.109232875976563,11.93075,9.305052875976562,12.02446L11.304532875976562,10.02498C11.210822875976563,9.82916,11.158352875976561,9.60984,11.158352875976561,9.37827C11.158352875976561,8.54984,11.829922875976562,7.8782700000000006,12.658352875976563,7.8782700000000006C12.889922875976563,7.8782700000000006,13.109232875976563,7.93075,13.305022875976562,8.024460000000001L15.608122875976562,5.72142C15.803322875976562,5.5261499999999995,16.119922875976563,5.5261499999999995,16.315222875976563,5.72142C16.510422875976563,5.9166799999999995,16.510422875976563,6.23326,16.315222875976563,6.42852L14.012122875976562,8.73156C14.105822875976562,8.92738,14.158322875976562,9.1467,14.158322875976562,9.37827C14.158322875976562,10.2067,13.486822875976562,10.87827,12.658352875976563,10.87827C12.426772875976562,10.87827,12.207452875976562,10.82579,12.011642875976563,10.73209L10.012162875976562,12.73156C10.105872875976562,12.92738,10.158352875976561,13.1467,10.158352875976561,13.37827C10.158352875976561,14.2067,9.486772875976563,14.8783,8.658352875976561,14.8783C8.426772875976562,14.8783,8.207452875976562,14.8258,8.011642875976563,14.7321L5.708602875976562,17.0351C5.513342875976562,17.2304,5.196752875976562,17.2304,5.001492875976562,17.0351ZM10.415712875976563,18.328C10.220452875976562,18.5233,9.903862875976563,18.5233,9.708602875976563,18.328C9.513342875976562,18.1328,9.513342875976562,17.816200000000002,9.708602875976563,17.6209L12.304532875976562,15.025C12.210822875976563,14.8292,12.158352875976563,14.6098,12.158352875976563,14.3783C12.158352875976563,13.54984,12.829922875976562,12.87827,13.658322875976562,12.87827C13.889922875976563,12.87827,14.109222875976563,12.93075,14.305022875976562,13.02446L17.486822875976564,9.84274C17.682022875976564,9.64747,17.99862287597656,9.64747,18.19392287597656,9.84274C18.38912287597656,10.038,18.38912287597656,10.35458,18.19392287597656,10.54984L15.012122875976562,13.73156C15.105822875976562,13.92738,15.158322875976562,14.1467,15.158322875976562,14.3783C15.158322875976562,15.2067,14.486822875976562,15.8783,13.658322875976562,15.8783C13.426822875976562,15.8783,13.207422875976562,15.8258,13.011642875976563,15.7321L10.415712875976563,18.328Z stroke-opacity=0 stroke=none>');
const ka = () => xa();
var Aa = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M13.1889,6C12.98303,6.582599999999999,12.42741,7,11.7743,7C11.12119,7,10.565570000000001,6.582599999999999,10.35965,6L3.5,6C3.223857,6,3,5.77614,3,5.5C3,5.22386,3.223857,5,3.5,5L10.35965,5C10.565570000000001,4.417404,11.12119,4,11.7743,4C12.42741,4,12.98303,4.417404,13.1889,5L18.5,5C18.7761,5,19,5.22386,19,5.5C19,5.77614,18.7761,6,18.5,6L13.1889,6ZM3,8.5C3,8.22386,3.223857,8,3.5,8L18.5,8C18.7761,8,19,8.22386,19,8.5C19,8.77614,18.7761,9,18.5,9L3.5,9C3.223857,9,3,8.77614,3,8.5ZM3.278549,11.5C3.278549,11.22386,3.502407,11,3.778549,11L18.7785,11C19.0547,11,19.2785,11.22386,19.2785,11.5C19.2785,11.77614,19.0547,12,18.7785,12L3.778549,12C3.502407,12,3.278549,11.77614,3.278549,11.5ZM3.139267,14.5C3.139267,14.2239,3.363124,14,3.6392670000000003,14L18.6393,14C18.915399999999998,14,19.1393,14.2239,19.1393,14.5C19.1393,14.7761,18.915399999999998,15,18.6393,15L3.6392670000000003,15C3.363124,15,3.139267,14.7761,3.139267,14.5ZM13.1889,18C12.98303,18.5826,12.42741,19,11.7743,19C11.12119,19,10.565570000000001,18.5826,10.35965,18L3.778549,18C3.502407,18,3.278549,17.7761,3.278549,17.5C3.278549,17.2239,3.502407,17,3.778549,17L10.35965,17C10.565570000000001,16.4174,11.12119,16,11.7743,16C12.42741,16,12.98303,16.4174,13.1889,17L18.7785,17C19.0547,17,19.2785,17.2239,19.2785,17.5C19.2785,17.7761,19.0547,18,18.7785,18L13.1889,18Z stroke-opacity=0 stroke=none>');
const wa = () => Aa();
var Ma = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M4.91465,6C4.70873,6.582599999999999,4.15311,7,3.5,7C2.671573,7,2,6.32843,2,5.5C2,4.671573,2.671573,4,3.5,4C4.15311,4,4.70873,4.417404,4.91465,5L18.2257,5C18.5018,5,18.7257,5.22386,18.7257,5.5C18.7257,5.77614,18.5018,6,18.2257,6L4.91465,6ZM2.7257,8.5C2.7257,8.22386,2.949558,8,3.2257,8L18.2257,8C18.5018,8,18.7257,8.22386,18.7257,8.5C18.7257,8.77614,18.5018,9,18.2257,9L3.2257,9C2.949558,9,2.7257,8.77614,2.7257,8.5ZM3.00425,11.5C3.00425,11.22386,3.22811,11,3.50425,11L18.5042,11C18.7804,11,19.0042,11.22386,19.0042,11.5C19.0042,11.77614,18.7804,12,18.5042,12L3.50425,12C3.22811,12,3.00425,11.77614,3.00425,11.5ZM2.864967,14.5C2.864967,14.2239,3.08882,14,3.36497,14L18.365,14C18.6411,14,18.865,14.2239,18.865,14.5C18.865,14.7761,18.6411,15,18.365,15L3.36497,15C3.08882,15,2.864967,14.7761,2.864967,14.5ZM20,17.5C20,18.328400000000002,19.3284,19,18.5,19C17.846899999999998,19,17.2913,18.5826,17.0854,18L3.50425,18C3.22811,18,3.00425,17.7761,3.00425,17.5C3.00425,17.2239,3.22811,17,3.50425,17L17.0854,17C17.2913,16.4174,17.846899999999998,16,18.5,16C19.3284,16,20,16.671599999999998,20,17.5Z stroke-opacity=0 stroke=none>');
const Sa = () => Ma();
var Ta = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><ellipse cx=10.5 cy=11.5 rx=1.5 ry=1.5 stroke-opacity=0 stroke=none></ellipse><ellipse cx=17.5 cy=11.5 rx=1.5 ry=1.5 stroke-opacity=0 stroke=none></ellipse><ellipse cx=10.5 cy=11.5 rx=7 ry=7 fill-opacity=0 stroke-opacity=1 fill=none stroke-width=1></ellipse><ellipse cx=10.5 cy=11.5 rx=5 ry=5 fill-opacity=0 stroke-opacity=1 fill=none stroke-width=1></ellipse><ellipse cx=10.5 cy=11.5 rx=3 ry=3 fill-opacity=0 stroke-opacity=1 fill=none stroke-width=1>');
const Ia = () => Ta();
var Da = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M3,7.32468C5.90649,3.3893050000000002,11.49833,2.81306,14.6674,6.31944C14.9056,6.1554199999999994,15.192,6.05979,15.5,6.05979C15.845,6.05979,16.1628,6.17974,16.4162,6.381349999999999L18.4509,4.23827L19,4.816615L16.8945,7.03429C16.962600000000002,7.21075,17,7.40319,17,7.60463C17,8.45782,16.328400000000002,9.14947,15.5,9.14947C14.6716,9.14947,14,8.45782,14,7.60463C14,7.36402,14.0534,7.13625,14.1487,6.93322C11.32695,3.748365,6.25159,4.253956,3.612785,7.82695L3,7.32468ZM14.09,15.4717C15.7427,13.78985,16.244500000000002,11.524740000000001,15.5633,9.30134L15.5618,9.30134L16.3012,9.0502C17.072400000000002,11.56646,16.497700000000002,14.158,14.6282,16.0599C12.28737,18.442,8.62386,18.6988,6.41348,16.4501C4.5526,14.5572,4.52076,11.19671,6.36766,9.3177C7.89069,7.76754,10.07544,7.706189999999999,11.56741,9.22363C11.95453,9.61742,12.24817,10.08363,12.43369,10.57677L14.1451,8.77421L14.6942,9.35256L12.64982,11.50582C12.65827,11.59712,12.66295,11.68839,12.66378,11.77936C12.87398,12.04523,13,12.38451,13,12.7541C13,13.60729,12.32843,14.2989,11.5,14.2989C10.67157,14.2989,10,13.60729,10,12.7541C10,11.90091,10.67157,11.20926,11.5,11.20926C11.60387,11.20926,11.70528,11.220130000000001,11.8032,11.240829999999999L11.81763,11.22564C11.69858,10.71874,11.42858,10.21929,11.0284,9.81179C9.844000000000001,8.60765,8.136890000000001,8.65592,6.90822,9.90586C5.37975,11.460930000000001,5.40693,14.288,6.95404,15.8619C8.84598,17.7867,12.03496,17.5626,14.09,15.4717Z stroke-opacity=0 stroke=none>');
const Pa = () => Da();
var Ba = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M4,17.0854L4,3.5C4,3.223858,4.22386,3,4.5,3C4.77614,3,5,3.223858,5,3.5L5,10L7.57584,10L9.8127,4.46359C9.91614,4.20756,10.20756,4.08386,10.46359,4.1873000000000005C10.71963,4.29075,10.84333,4.58216,10.73988,4.8382000000000005L8.65438,10L11.08535,10C11.29127,9.4174,11.84689,9,12.5,9C12.65154,9,12.79784,9.02247,12.93573,9.06427L16.6464,5.35355C16.8417,5.15829,17.1583,5.15829,17.3536,5.35355C17.5488,5.54882,17.5488,5.8654,17.3536,6.06066L13.7475,9.66675C13.907,9.90508,14,10.19168,14,10.5C14,11.15311,13.5826,11.70873,13,11.91465L13,14.3638L18.3714,12.1936C18.6274,12.09015,18.918799999999997,12.21385,19.0222,12.46989C19.1257,12.72592,19.002,13.0173,18.746000000000002,13.1208L13,15.4423L13,18L19.5,18C19.7761,18,20,18.2239,20,18.5C20,18.7761,19.7761,19,19.5,19L5.91465,19C5.70873,19.5826,5.15311,20,4.5,20C3.671573,20,3,19.3284,3,18.5C3,17.846899999999998,3.417404,17.2913,4,17.0854ZM6.3729499999999994,17.0413L12,14.7678L12,11.91465C11.88136,11.87271,11.76956,11.81627,11.66675,11.74746L6.3729499999999994,17.0413ZM12,15.8463L6.6694700000000005,18L12,18L12,15.8463ZM6.38629,15.6137L8.250350000000001,11L11,11L6.38629,15.6137ZM5,11L7.17182,11L5,16.3754L5,11Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const Oa = () => Ba();
var Ea = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M17,4.5C17,5.32843,16.328400000000002,6,15.5,6C15.0931,6,14.7241,5.83802,14.4539,5.57503L5.98992,8.32515C5.99658,8.38251,6,8.440850000000001,6,8.5C6,9.15311,5.582599999999999,9.70873,5,9.91465L5,11.08535C5.42621,11.236,5.763999999999999,11.57379,5.91465,12L19.5,12C19.7761,12,20,12.22386,20,12.5C20,12.77614,19.7761,13,19.5,13L5.91465,13C5.70873,13.5826,5.15311,14,4.5,14C3.671573,14,3,13.3284,3,12.5C3,11.84689,3.417404,11.29127,4,11.08535L4,9.91465C3.417404,9.70873,3,9.15311,3,8.5C3,7.67157,3.671573,7,4.5,7C4.90411,7,5.2709,7.15981,5.5406200000000005,7.41967L14.0093,4.66802C14.0032,4.6128599999999995,14,4.5568,14,4.5C14,3.671573,14.6716,3,15.5,3C16.328400000000002,3,17,3.671573,17,4.5ZM4,15.5C4,15.2239,4.22386,15,4.5,15L19.5,15C19.7761,15,20,15.2239,20,15.5C20,15.7761,19.7761,16,19.5,16L4.5,16C4.22386,16,4,15.7761,4,15.5ZM4,18.5C4,18.2239,4.22386,18,4.5,18L19.5,18C19.7761,18,20,18.2239,20,18.5C20,18.7761,19.7761,19,19.5,19L4.5,19C4.22386,19,4,18.7761,4,18.5Z stroke-opacity=0 stroke=none>');
const Na = () => Ea();
var Ka = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M20,3.5C20,4.15311,19.5826,4.70873,19,4.91465L19,18.5C19,18.7761,18.7761,19,18.5,19L4.91465,19C4.70873,19.5826,4.15311,20,3.5,20C2.671573,20,2,19.3284,2,18.5C2,17.846899999999998,2.417404,17.2913,3,17.0854L3,3.5C3,3.22386,3.22386,3,3.5,3L17.0854,3C17.2913,2.417404,17.846899999999998,2,18.5,2C19.3284,2,20,2.671573,20,3.5ZM17.0854,4C17.236,4.42621,17.5738,4.763999999999999,18,4.91465L18,8L14,8L14,4L17.0854,4ZM13,4L13,8L9,8L9,4L13,4ZM13,9L9,9L9,13L13,13L13,9ZM13,14L9,14L9,18L13,18L13,14ZM14,18L14,14L18,14L18,18L14,18ZM18,13L14,13L14,9L18,9L18,13ZM4.91465,18C4.763999999999999,17.5738,4.42621,17.236,4,17.0854L4,14L8,14L8,18L4.91465,18ZM4,8L4,4L8,4L8,8L4,8ZM8,9L8,13L4,13L4,9L8,9Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const ja = () => Ka();
var Fa = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><ellipse cx=10.5 cy=11.5 rx=1.5 ry=1.5 stroke-opacity=0 stroke=none></ellipse><ellipse cx=17.5 cy=11.5 rx=1.5 ry=1.5 stroke-opacity=0 stroke=none></ellipse><ellipse cx=10.5 cy=11.5 rx=7 ry=7 fill-opacity=0 fill=none stroke-opacity=1 stroke-width=1>');
const Qa = () => Fa();
var Ra = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11.57625,6.9981C11.55099,6.999359999999999,11.52557,7,11.5,7C11.34,7,11.18584,6.97495,11.04125,6.9285499999999995L5.55401,16.4327C5.713760000000001,16.5905,5.83826,16.7839,5.91465,17L16.0854,17C16.2187,16.622700000000002,16.4987,16.314700000000002,16.8569,16.1445L11.57625,6.9981ZM12.50759,6.611219999999999C12.81005,6.336790000000001,13,5.94058,13,5.5C13,4.671573,12.32843,4,11.5,4C10.67157,4,10,4.671573,10,5.5C10,5.80059,10.08841,6.08052,10.24066,6.31522L4.64514,16.0069C4.59738,16.002299999999998,4.54896,16,4.5,16C3.671573,16,3,16.671599999999998,3,17.5C3,18.328400000000002,3.671573,19,4.5,19C5.15311,19,5.70873,18.5826,5.91465,18L16.0854,18C16.2913,18.5826,16.846899999999998,19,17.5,19C18.328400000000002,19,19,18.328400000000002,19,17.5C19,16.8365,18.5691,16.2735,17.971899999999998,16.075699999999998L12.50759,6.611219999999999Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const Za = () => Ra();
var za = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M19,4.5C19,5.15311,18.5826,5.70873,18,5.91465L18,18.5C18,18.7761,17.7761,19,17.5,19L5.91465,19C5.70873,19.5826,5.15311,20,4.5,20C3.671573,20,3,19.3284,3,18.5C3,17.846899999999998,3.417404,17.2913,4,17.0854L4,4.5C4,4.22386,4.22386,4,4.5,4L16.0854,4C16.2913,3.417404,16.846899999999998,3,17.5,3C18.328400000000002,3,19,3.671573,19,4.5ZM5,5L16.0854,5C16.236,5.42621,16.5738,5.763999999999999,17,5.91465L17,18L5.91465,18C5.763999999999999,17.5738,5.42621,17.236,5,17.0854L5,5Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const Ua = () => za();
var Ya = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M19.6401,7.99355C20.4028,7.92291,21,7.2811900000000005,21,6.5C21,5.671573,20.3284,5,19.5,5C18.8469,5,18.2913,5.417404,18.0854,6L7.62067,6C7.34453,6,7.12067,6.22386,7.12067,6.5C7.12067,6.5479,7.12741,6.59423,7.13999,6.63809L3.2294099999999997,15.0243C2.530138,15.1517,2,15.764,2,16.5C2,17.328400000000002,2.671573,18,3.5,18C4.15311,18,4.70873,17.5826,4.91465,17L14.5963,17C14.6456,17.076,14.7162,17.1396,14.8044,17.1807C15.0546,17.2974,15.3521,17.1891,15.4688,16.9388L19.6401,7.99355ZM14.7896,16.0293L18.6551,7.739599999999999C18.3942,7.56144,18.1925,7.30307,18.0854,7L8.0746,7L4.25044,15.2009C4.55701,15.3784,4.79493,15.6613,4.91465,16L14.6207,16C14.68,16,14.7368,16.0103,14.7896,16.0293Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const Va = () => Ya();
var Ha = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M8.134443814697265,7.494615087890625L8.764323814697265,7.494615087890625L8.764323814697265,3.414215087890625L8.310223814697267,3.414215087890625L7.294603814697266,4.005035087890625L7.289713814697266,4.634915087890625L8.134443814697265,4.149892087890625L8.134443814697265,7.494615087890625ZM18.832003814697266,6.933095087890624Q19.004603814697266,6.635245087890625,19.004603814697266,6.2543850878906255Q19.004603814697266,5.884915087890625,18.845103814697264,5.593575087890625Q18.685503814697267,5.3006050878906255,18.399103814697266,5.136225087890625Q18.114303814697266,4.9702050878906245,17.754603814697266,4.9653250878906245L18.820603814697265,3.840647087890625L18.820603814697265,3.414215087890625L16.519203814697264,3.414215087890625L16.519203814697264,3.939931087890625L18.050803814697264,3.939931087890625L16.719403814697266,5.334785087890625L17.074203814697263,5.7205350878906245Q17.254903814697265,5.484525087890625,17.619503814697268,5.484525087890625Q17.980803814697268,5.484525087890625,18.187503814697266,5.689605087890625Q18.394203814697267,5.894685087890625,18.394203814697267,6.2543850878906255Q18.394203814697267,6.604315087890625,18.187503814697266,6.822415087890625Q17.980803814697268,7.0405150878906255,17.640603814697265,7.0405150878906255Q17.334603814697267,7.0405150878906255,17.124703814697266,6.890775087890625Q16.914703814697265,6.739415087890626,16.820303814697265,6.469225087890624L16.354803814697263,6.744295087890626Q16.480103814697266,7.125155087890625,16.821903814697265,7.341625087890625Q17.165403814697264,7.559725087890625,17.640603814697265,7.559725087890625Q18.039403814697266,7.559725087890625,18.348603814697267,7.393705087890625Q18.659503814697267,7.229315087890625,18.832003814697266,6.933095087890624ZM10.000003814697266,10.634915087890626C10.000003814697266,11.024655087890626,9.851363814697265,11.379685087890625,9.607683814697266,11.646395087890625L12.168903814697266,15.171615087890626C12.275403814697265,15.147615087890625,12.386203814697266,15.134915087890626,12.500003814697266,15.134915087890626C12.596503814697266,15.134915087890626,12.690803814697265,15.144015087890624,12.782303814697265,15.161415087890624L16.108803814697268,11.196955087890625C16.038703814697264,11.023375087890624,16.000003814697266,10.833655087890625,16.000003814697266,10.634915087890626C16.000003814697266,9.806495087890625,16.671603814697264,9.134915087890626,17.500003814697266,9.134915087890626C18.328403814697264,9.134915087890626,19.000003814697266,9.806495087890625,19.000003814697266,10.634915087890626C19.000003814697266,11.463345087890625,18.328403814697264,12.134915087890626,17.500003814697266,12.134915087890626C17.239503814697265,12.134915087890626,16.994503814697268,12.068495087890625,16.781003814697264,11.951675087890624L13.654703814697266,15.677415087890624C13.870303814697266,15.937215087890625,14.000003814697266,16.270915087890625,14.000003814697266,16.634915087890626C14.000003814697266,17.463315087890624,13.328403814697266,18.134915087890626,12.500003814697266,18.134915087890626C11.671573814697265,18.134915087890626,11.000003814697266,17.463315087890624,11.000003814697266,16.634915087890626C11.000003814697266,16.284415087890626,11.120193814697265,15.962015087890626,11.321603814697266,15.706715087890625L8.715393814697265,12.119565087890624C8.645053814697267,12.129685087890625,8.573143814697266,12.134915087890626,8.500003814697266,12.134915087890626C8.162103814697264,12.134915087890626,7.8503038146972655,12.023195087890626,7.599523814697266,11.834665087890626L4.505583814697266,15.521915087890624C4.809213814697266,15.796415087890624,5.000003814697266,16.193415087890624,5.000003814697266,16.634915087890626C5.000003814697266,17.463315087890624,4.328433814697266,18.134915087890626,3.5000038146972656,18.134915087890626C2.6715768146972656,18.134915087890626,2.0000038146972656,17.463315087890624,2.0000038146972656,16.634915087890626C2.0000038146972656,15.806515087890626,2.6715768146972656,15.134915087890626,3.5000038146972656,15.134915087890626C3.508253814697266,15.134915087890626,3.5164838146972657,15.135015087890626,3.524703814697266,15.135115087890625L7.033823814697266,10.953115087890625C7.011673814697265,10.850565087890626,7.000003814697266,10.744105087890624,7.000003814697266,10.634915087890626C7.000003814697266,9.806495087890625,7.671573814697266,9.134915087890626,8.500003814697266,9.134915087890626C9.328433814697267,9.134915087890626,10.000003814697266,9.806495087890625,10.000003814697266,10.634915087890626Z stroke-opacity=0 stroke=none>');
const Ga = () => Ha();
var Xa = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M8.13444,7.494615087890625L8.76432,7.494615087890625L8.76432,3.414215087890625L8.310220000000001,3.414215087890625L7.2946,4.005035087890625L7.28971,4.634915087890625L8.13444,4.149892087890625L8.13444,7.494615087890625ZM18.832,6.929835087890625Q19.0046,6.635245087890625,19.0046,6.2543850878906255Q19.0046,5.889805087890625,18.8451,5.5952050878906245Q18.6855,5.3006050878906255,18.3975,5.132965087890625Q18.1094,4.9653250878906245,17.7399,4.9653250878906245Q17.435499999999998,4.9653250878906245,17.1556,5.149245087890625L17.2793,3.939931087890625L18.8304,3.939931087890625L18.8304,3.414215087890625L16.7406,3.414215087890625L16.5094,5.665195087890625L17.0156,5.795405087890625Q17.095399999999998,5.655425087890626,17.2516,5.570795087890625Q17.4095,5.484525087890625,17.6357,5.484525087890625Q17.9694,5.484525087890625,18.1842,5.697745087890625Q18.4007,5.909335087890625,18.4007,6.2543850878906255Q18.4007,6.604315087890625,18.1842,6.822415087890625Q17.9694,7.0405150878906255,17.6292,7.0405150878906255Q17.3298,7.0405150878906255,17.119799999999998,6.890775087890625Q16.9098,6.739415087890626,16.825200000000002,6.474115087890625L16.3597,6.749175087890626Q16.470399999999998,7.110505087890624,16.807299999999998,7.335115087890625Q17.144199999999998,7.559725087890625,17.6292,7.559725087890625Q18.0296,7.559725087890625,18.3438,7.392075087890625Q18.6595,7.224435087890625,18.832,6.929835087890625ZM10,10.634915087890626C10,11.024655087890626,9.85136,11.379685087890625,9.60768,11.646395087890625L12.1689,15.171615087890626C12.2754,15.147615087890625,12.3862,15.134915087890626,12.5,15.134915087890626C12.5965,15.134915087890626,12.6908,15.144015087890624,12.7823,15.161415087890624L16.108800000000002,11.196955087890625C16.0387,11.023375087890624,16,10.833655087890625,16,10.634915087890626C16,9.806495087890625,16.671599999999998,9.134915087890626,17.5,9.134915087890626C18.3284,9.134915087890626,19,9.806495087890625,19,10.634915087890626C19,11.463345087890625,18.3284,12.134915087890626,17.5,12.134915087890626C17.2395,12.134915087890626,16.994500000000002,12.068505087890625,16.781,11.951675087890624L13.6547,15.677415087890624C13.8703,15.937215087890625,14,16.270915087890625,14,16.634915087890626C14,17.463315087890624,13.3284,18.134915087890626,12.5,18.134915087890626C11.67157,18.134915087890626,11,17.463315087890624,11,16.634915087890626C11,16.284415087890626,11.12019,15.962015087890626,11.3216,15.706715087890625L8.71539,12.119565087890624C8.645050000000001,12.129685087890625,8.57314,12.134915087890626,8.5,12.134915087890626C8.162099999999999,12.134915087890626,7.8503,12.023195087890626,7.59952,11.834665087890626L4.50558,15.521915087890624C4.80921,15.796415087890624,5,16.193415087890624,5,16.634915087890626C5,17.463315087890624,4.32843,18.134915087890626,3.5,18.134915087890626C2.671573,18.134915087890626,2,17.463315087890624,2,16.634915087890626C2,15.806515087890626,2.671573,15.134915087890626,3.5,15.134915087890626C3.5082500000000003,15.134915087890626,3.51648,15.135015087890626,3.5247,15.135115087890625L7.03382,10.953115087890625C7.01167,10.850565087890626,7,10.744105087890624,7,10.634915087890626C7,9.806495087890625,7.67157,9.134915087890626,8.5,9.134915087890626C9.32843,9.134915087890626,10,9.806495087890625,10,10.634915087890626Z stroke-opacity=0 stroke=none>');
const Ja = () => Xa();
var Wa = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M18.8532,7.020985087890625Q19.0257,6.734525087890625,19.0257,6.369945087890625Q19.0257,6.020005087890625,18.8499,5.754705087890625Q18.6758,5.489415087890626,18.3649,5.339675087890625Q18.5944,5.209465087890625,18.7214,4.994615087890625Q18.8499,4.779775087890625,18.8499,4.5193550878906255Q18.8499,4.2003480878906245,18.7002,3.951324087890625Q18.5505,3.700673087890625,18.277,3.557444087890625Q18.0052,3.414215087890625,17.6455,3.414215087890625Q17.285800000000002,3.414215087890625,17.0107,3.557444087890625Q16.7357,3.700673087890625,16.5843,3.951324087890625Q16.4346,4.2003480878906245,16.4346,4.5193550878906255Q16.4346,4.779775087890625,16.561500000000002,4.994615087890625Q16.6901,5.209465087890625,16.919600000000003,5.339675087890625Q16.6055,5.489415087890626,16.4297,5.757965087890625Q16.255499999999998,6.024895087890625,16.255499999999998,6.369945087890625Q16.255499999999998,6.734525087890625,16.4297,7.020985087890625Q16.6055,7.305815087890625,16.919600000000003,7.465325087890625Q17.2354,7.624825087890625,17.6455,7.624825087890625Q18.0557,7.624825087890625,18.3682,7.465325087890625Q18.6807,7.305815087890625,18.8532,7.020985087890625ZM8.76432,7.559725087890625L8.13444,7.559725087890625L8.13444,4.214996087890625L7.28971,4.700025087890625L7.2946,4.070139087890625L8.310220000000001,3.479319087890625L8.76432,3.479319087890625L8.76432,7.559725087890625ZM17.1816,4.955555087890625Q17.0042,4.784655087890625,17.0042,4.5095950878906255Q17.0042,4.229645087890625,17.18,4.057119087890625Q17.355800000000002,3.884592087890625,17.6455,3.884592087890625Q17.935200000000002,3.884592087890625,18.1077,4.057119087890625Q18.2803,4.229645087890625,18.2803,4.5095950878906255Q18.2803,4.784655087890625,18.1045,4.955555087890625Q17.930300000000003,5.124825087890625,17.6455,5.124825087890625Q17.3607,5.124825087890625,17.1816,4.955555087890625ZM18.2217,5.7953950878906255Q18.4398,6.005365087890625,18.4398,6.3552950878906245Q18.4398,6.705235087890625,18.2217,6.915195087890625Q18.0052,7.125155087890625,17.6455,7.125155087890625Q17.285800000000002,7.125155087890625,17.067700000000002,6.915195087890625Q16.849600000000002,6.705235087890625,16.849600000000002,6.3552950878906245Q16.849600000000002,6.005365087890625,17.064500000000002,5.7953950878906255Q17.2793,5.585435087890625,17.6455,5.585435087890625Q18.0052,5.585435087890625,18.2217,5.7953950878906255ZM9.60768,11.711495087890626C9.85136,11.444785087890626,10,11.089765087890626,10,10.700025087890625C10,9.871595087890626,9.32843,9.200025087890625,8.5,9.200025087890625C7.67157,9.200025087890625,7,9.871595087890626,7,10.700025087890625C7,10.809205087890625,7.01167,10.915665087890625,7.03382,11.018215087890624L3.5247,15.200215087890625C3.51648,15.200115087890625,3.5082500000000003,15.200015087890625,3.5,15.200015087890625C2.671573,15.200015087890625,2,15.871615087890625,2,16.700015087890627C2,17.528415087890625,2.671573,18.200015087890627,3.5,18.200015087890627C4.32843,18.200015087890627,5,17.528415087890625,5,16.700015087890627C5,16.258515087890625,4.80921,15.861515087890625,4.50558,15.587015087890626L7.59952,11.899765087890625C7.8503,12.088295087890625,8.162099999999999,12.200025087890625,8.5,12.200025087890625C8.57314,12.200025087890625,8.645050000000001,12.194785087890626,8.71539,12.184675087890625L11.3216,15.771815087890625C11.12019,16.027215087890625,11,16.349515087890623,11,16.700015087890627C11,17.528415087890625,11.67157,18.200015087890627,12.5,18.200015087890627C13.3284,18.200015087890627,14,17.528415087890625,14,16.700015087890627C14,16.336015087890623,13.8703,16.002315087890626,13.6547,15.742515087890625L16.781,12.016775087890625C16.994500000000002,12.133605087890626,17.2395,12.200025087890625,17.5,12.200025087890625C18.3284,12.200025087890625,19,11.528445087890624,19,10.700025087890625C19,9.871595087890626,18.3284,9.200025087890625,17.5,9.200025087890625C16.671599999999998,9.200025087890625,16,9.871595087890626,16,10.700025087890625C16,10.898765087890624,16.0387,11.088475087890625,16.108800000000002,11.262055087890625L12.7823,15.226515087890625C12.6908,15.209115087890625,12.5965,15.200015087890625,12.5,15.200015087890625C12.3862,15.200015087890625,12.2754,15.212715087890626,12.1689,15.236715087890625L9.60768,11.711495087890626Z stroke-opacity=0 stroke=none>');
const qa = () => Wa();
var ei = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M9.474616630859375,7.494615087890625L8.844736630859375,7.494615087890625L8.844736630859375,4.149892087890625L8.000006630859374,4.634915087890625L8.004896630859374,4.005035087890625L9.020516630859376,3.414215087890625L9.474616630859375,3.414215087890625L9.474616630859375,7.494615087890625ZM18.529296630859378,4.8318550878906255Q18.307996630859375,5.028795087890625,18.122396630859377,5.385245087890625Q17.868496630859376,5.019035087890625,17.629196630859376,4.8269750878906255Q17.389996630859375,4.634915087890625,17.168596630859376,4.634915087890625Q16.794296630859375,4.634915087890625,16.522496630859376,4.976715087890625Q16.252296630859377,5.3168850878906255,16.252296630859377,5.7856350878906255Q16.252296630859377,6.218575087890625,16.502896630859375,6.521315087890625Q16.755196630859373,6.822415087890625,17.114896630859377,6.822415087890625Q17.368796630859375,6.822415087890625,17.588596630859374,6.625475087890624Q17.809896630859377,6.428535087890625,17.998696630859374,6.0688350878906245Q18.249396630859373,6.439935087890625,18.488596630859377,6.631985087890625Q18.727896630859377,6.822415087890625,18.952496630859375,6.822415087890625Q19.326796630859373,6.822415087890625,19.596996630859376,6.482245087890625Q19.868796630859375,6.140455087890626,19.868796630859375,5.671705087890626Q19.868796630859375,5.238755087890625,19.618196630859376,4.937655087890625Q19.367496630859375,4.634915087890625,19.006196630859375,4.634915087890625Q18.750696630859377,4.634915087890625,18.529296630859378,4.8318550878906255ZM18.337296630859377,5.674955087890625L18.278696630859375,5.596835087890625Q18.449596630859375,5.272935087890625,18.622096630859374,5.1101750878906245Q18.794596630859374,4.947415087890625,18.967096630859373,4.947415087890625Q19.194996630859375,4.947415087890625,19.346396630859374,5.1345950878906255Q19.497696630859377,5.320135087890625,19.497696630859377,5.598455087890625Q19.497696630859377,5.8914250878906245,19.360996630859376,6.096505087890625Q19.224296630859374,6.301585087890626,19.027396630859375,6.301585087890626Q18.915096630859374,6.301585087890626,18.742496630859375,6.146965087890624Q18.569996630859375,5.992335087890625,18.337296630859377,5.674955087890625ZM17.785496630859377,5.779125087890625L17.842496630859372,5.857245087890625Q17.668296630859373,6.186025087890625,17.495796630859374,6.348785087890625Q17.324896630859374,6.509915087890625,17.153996630859375,6.509915087890625Q16.926096630859377,6.509915087890625,16.774796630859377,6.324375087890624Q16.623396630859375,6.137195087890625,16.623396630859375,5.858875087890625Q16.623396630859375,5.565905087890625,16.761696630859376,5.360825087890625Q16.900096630859373,5.1557550878906255,17.095396630859376,5.1557550878906255Q17.228896630859374,5.1557550878906255,17.365596630859375,5.2778250878906245Q17.502296630859377,5.399895087890625,17.785496630859377,5.779125087890625ZM10.710296630859375,10.634915087890626C10.710296630859375,11.024655087890626,10.561656630859375,11.379685087890625,10.317976630859375,11.646395087890625L12.879196630859376,15.171615087890626C12.985696630859374,15.147615087890625,13.096496630859376,15.134915087890626,13.210296630859375,15.134915087890626C13.306796630859376,15.134915087890626,13.401096630859374,15.144015087890624,13.492596630859374,15.161415087890624L16.819096630859377,11.196955087890625C16.748996630859374,11.023375087890624,16.710296630859375,10.833655087890625,16.710296630859375,10.634915087890626C16.710296630859375,9.806495087890625,17.381896630859373,9.134915087890626,18.210296630859375,9.134915087890626C19.038696630859373,9.134915087890626,19.710296630859375,9.806495087890625,19.710296630859375,10.634915087890626C19.710296630859375,11.463345087890625,19.038696630859373,12.134915087890626,18.210296630859375,12.134915087890626C17.949796630859375,12.134915087890626,17.704796630859377,12.068505087890625,17.491296630859374,11.951675087890624L14.364996630859375,15.677415087890624C14.580596630859375,15.937215087890625,14.710296630859375,16.270915087890625,14.710296630859375,16.634915087890626C14.710296630859375,17.463315087890624,14.038696630859375,18.134915087890626,13.210296630859375,18.134915087890626C12.381866630859374,18.134915087890626,11.710296630859375,17.463315087890624,11.710296630859375,16.634915087890626C11.710296630859375,16.284415087890626,11.830486630859374,15.962015087890626,12.031896630859375,15.706715087890625L9.425686630859374,12.119565087890624C9.355346630859376,12.129685087890625,9.283436630859375,12.134915087890626,9.210296630859375,12.134915087890626C8.872396630859374,12.134915087890626,8.560596630859376,12.023195087890626,8.309816630859375,11.834665087890626L5.215876630859375,15.521915087890624C5.519506630859375,15.796415087890624,5.710296630859375,16.193415087890624,5.710296630859375,16.634915087890626C5.710296630859375,17.463315087890624,5.038726630859375,18.134915087890626,4.210296630859375,18.134915087890626C3.381869630859375,18.134915087890626,2.710296630859375,17.463315087890624,2.710296630859375,16.634915087890626C2.710296630859375,15.806515087890626,3.381869630859375,15.134915087890626,4.210296630859375,15.134915087890626C4.218546630859375,15.134915087890626,4.226776630859375,15.135015087890626,4.234996630859375,15.135115087890625L7.744116630859375,10.953115087890625C7.721966630859375,10.850565087890626,7.710296630859375,10.744105087890624,7.710296630859375,10.634915087890626C7.710296630859375,9.806495087890625,8.381866630859374,9.134915087890626,9.210296630859375,9.134915087890626C10.038726630859376,9.134915087890626,10.710296630859375,9.806495087890625,10.710296630859375,10.634915087890626Z stroke-opacity=0 stroke=none>');
const ti = () => ei();
var ni = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M21,5.5C21,6.32843,20.3284,7,19.5,7C19.4136,7,19.3289,6.99269,19.2465,6.97866L15.6257,15.5086C15.8587,15.7729,16,16.119999999999997,16,16.5C16,17.328400000000002,15.3284,18,14.5,18C13.8469,18,13.2913,17.5826,13.0854,17L3.91465,17C3.70873,17.5826,3.15311,18,2.5,18C1.671573,18,1,17.328400000000002,1,16.5C1,15.6716,1.671573,15,2.5,15C2.5840199999999998,15,2.66643,15.0069,2.74668,15.0202L6.36934,6.48574C6.13933,6.22213,6,5.87733,6,5.5C6,4.671573,6.67157,4,7.5,4C8.15311,4,8.70873,4.417404,8.91465,5L18.0854,5C18.2913,4.417404,18.8469,4,19.5,4C20.3284,4,21,4.671573,21,5.5ZM18.0854,6L8.91465,6C8.892579999999999,6.06243,8.8665,6.12296,8.83672,6.18128L13.9814,15.0921C14.143,15.0325,14.3177,15,14.5,15C14.584,15,14.6664,15.0069,14.7467,15.0202L18.3693,6.48574C18.2462,6.3446,18.149,6.1802,18.0854,6ZM13.2036,15.745L8.0861,6.8811800000000005C7.90605,6.95768,7.70797,7,7.5,7C7.41359,7,7.32888,6.99269,7.24647,6.97866L3.62571,15.5086C3.7512,15.651,3.8501,15.8174,3.91465,16L13.0854,16C13.1169,15.9108,13.1566,15.8255,13.2036,15.745Z stroke-opacity=0 stroke=none>');
const ri = () => ni();
var ai = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M5.92159,5.93994C6.04014,5.90529,6.152620000000001,5.85639,6.25704,5.79523L9.12729,9.89437C9.045449999999999,10.07959,9,10.28449,9,10.5C9,10.79522,9.08529,11.07053,9.232569999999999,11.30262L4.97573,16.7511L5.92159,5.93994ZM4.92259,5.8848400000000005C4.38078,5.658659999999999,4,5.1238,4,4.5C4,3.671573,4.67157,3,5.5,3C6.2157,3,6.81433,3.50124,6.96399,4.17183L15.1309,4.88634C15.3654,4.36387,15.8902,4,16.5,4C17.328400000000002,4,18,4.67157,18,5.5C18,6.08983,17.659599999999998,6.60015,17.1645,6.84518L18.4264,14.0018C18.4508,14.0006,18.4753,14,18.5,14C19.3284,14,20,14.6716,20,15.5C20,16.328400000000002,19.3284,17,18.5,17C17.932499999999997,17,17.4386,16.6849,17.183799999999998,16.22L5.99686,18.5979C5.946429999999999,19.3807,5.29554,20,4.5,20C3.671573,20,3,19.3284,3,18.5C3,17.869300000000003,3.389292,17.3295,3.94071,17.1077L4.92259,5.8848400000000005ZM5.72452,17.6334C5.69799,17.596,5.6698,17.5599,5.64004,17.525100000000002L10.01843,11.92103C10.16958,11.97223,10.33155,12,10.5,12C10.80059,12,11.08052,11.91158,11.31522,11.75934L17.0606,15.0765C17.0457,15.1271,17.0335,15.1789,17.023899999999998,15.2317L5.72452,17.6334ZM11.92855,10.95875L17.4349,14.1379L16.1699,6.96356C15.9874,6.92257,15.8174,6.8483,15.6667,6.74746L11.99771,10.4165C11.99923,10.44414,12,10.47198,12,10.5C12,10.66,11.97495,10.814160000000001,11.92855,10.95875ZM10.5,9C10.259830000000001,9,10.03285,9.05644,9.83159,9.15679L7.04919,5.1831L15.0493,5.88302C15.054,5.90072,15.059,5.91829,15.0643,5.9357299999999995L11.56066,9.43934C11.28921,9.16789,10.91421,9,10.5,9Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const ii = () => ai();
var si = /* @__PURE__ */ C('<svg viewBox="0 0 22 22"><path d=M4.727219638671875,8.007996215820313L9.973849638671876,2.7629472158203123C10.167279638671875,2.5696791158203123,10.480729638671875,2.5696791158203123,10.674169638671875,2.7629472158203123L13.223329638671874,5.311756215820313C13.416929638671874,5.505236215820313,13.416929638671874,5.8189862158203125,13.223329638671874,6.012466215820313L7.977129638671875,11.257906215820313C7.379859638671875,11.855176215820313,7.407609638671875,12.909396215820312,8.033809638671876,13.535596215820313C8.660409638671876,14.162596215820313,9.713849638671874,14.189996215820312,10.311129638671876,13.591896215820313L15.556929638671875,8.346066215820311C15.750429638671875,8.152526215820313,16.064229638671875,8.152526215820313,16.257629638671872,8.346066215820311L18.806529638671876,10.895266215820312C19.000029638671876,11.088746215820313,19.000029638671876,11.402496215820312,18.806529638671876,11.595976215820313L13.560629638671875,16.841796215820313C11.165619638671876,19.237196215820312,7.197149638671875,19.19919621582031,4.783499638671875,16.785496215820313C2.3698426386718747,14.371896215820312,2.331397638671875,10.403416215820313,4.727219638671875,8.007996215820313ZM12.172299638671875,5.662106215820312L10.323809638671875,3.8136162158203124L5.4287196386718755,8.709096215820313C3.422893638671875,10.714536215820312,3.4549956386718748,14.055196215820313,5.484999638671875,16.08479621582031C7.514609638671875,18.114796215820313,10.855289638671875,18.146496215820314,12.860719638671876,16.141096215820312L15.465629638671874,13.535796215820312L14.090929638671875,12.160756215820312L14.791629638671875,11.460436215820312L16.166229638671876,12.834996215820313L17.755829638671877,11.245226215820313L15.907729638671874,9.396736215820312L11.011839638671875,14.292596215820312C10.042809638671875,15.262396215820312,8.418249638671874,15.243796215820312,7.406019638671875,14.306496215820312L7.333099638671875,14.236296215820312C6.327599638671876,13.230796215820313,6.284009638671876,11.550396215820312,7.276419638671875,10.557586215820312L9.882199638671874,7.952026215820313L8.501079638671875,6.570906215820313L9.201789638671876,5.870186215820313L10.582939638671874,7.251336215820312L12.172299638671875,5.662106215820312Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const oi = (e) => (() => {
  var t = si();
  return U(t, "class", `icon-overlay ${e ?? ""}`), t;
})();
var ci = /* @__PURE__ */ C('<svg viewBox="0 0 22 22"><defs><clipPath id=master_svg0_151_615><rect x=0 y=0 width=22 height=22 rx=0></rect></clipPath></defs><g clip-path=url(#master_svg0_151_615)><path d=M19.672,3.0673368C19.4417,2.9354008,19.1463,3.00292252,18.9994,3.2210900000000002L17.4588,5.50622L16.743299999999998,3.781253L13.9915,7.4662L13.9618,7.51108C13.8339,7.72862,13.8936,8.005659999999999,14.1004,8.15391L14.1462,8.183430000000001C14.3683,8.308720000000001,14.6511,8.25001,14.8022,8.047229999999999L16.4907,5.78571L17.246299999999998,7.60713L19.8374,3.7635389999999997L19.8651,3.717088C19.9871,3.484615,19.9023,3.199273,19.672,3.0673368ZM4.79974,8.462530000000001L10.117740000000001,3.252975C10.31381,3.0610145,10.63152,3.0610145,10.82759,3.252975L13.4115,5.78453C13.6076,5.976710000000001,13.6076,6.28833,13.4115,6.4805L8.093869999999999,11.69045C7.48847,12.28368,7.51659,13.3308,8.151309999999999,13.9528C8.786439999999999,14.5755,9.85421,14.6027,10.45961,14.0087L15.7768,8.79831C15.9729,8.60609,16.2909,8.60609,16.487099999999998,8.79831L19.0705,11.33026C19.2667,11.52244,19.2667,11.83406,19.0705,12.02623L13.7533,17.2366C11.32572,19.6158,7.30328,19.578,4.85679,17.1807C2.410298,14.7834,2.371331,10.84174,4.79974,8.462530000000001ZM12.3461,6.1325199999999995L10.47246,4.29654L5.51079,9.15889C3.477674,11.15076,3.510214,14.4688,5.56784,16.4847C7.62506,18.500999999999998,11.01117,18.5325,13.0439,16.540599999999998L15.6842,13.9529L14.2908,12.58718L15.0011,11.89161L16.394399999999997,13.2569L18.0056,11.67786L16.1323,9.84188L11.16985,14.7046C10.18764,15.6679,8.540980000000001,15.6494,7.51498,14.7184L7.44107,14.6487C6.4219,13.65,6.37771,11.98096,7.38362,10.994869999999999L10.02485,8.40693L8.624939999999999,7.03516L9.335180000000001,6.33919L10.73512,7.71099L12.3461,6.1325199999999995Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const li = (e) => (() => {
  var t = ci();
  return U(t, "class", `icon-overlay ${e ?? ""}`), t;
})();
var ui = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M11,17C5.80945,17,3.667717,12.85,3.113386,11.575C2.9622047,11.2,2.9622047,10.8,3.113386,10.425C3.667717,9.15,5.80945,5,11,5C16.165399999999998,5,18.3323,9.15,18.8866,10.425C19.0378,10.8,19.0378,11.2,18.8866,11.575C18.3323,12.85,16.165399999999998,17,11,17ZM4.04567,10.8C3.995276,10.925,3.995276,11.05,4.04567,11.175C4.52441,12.325,6.43937,16,11,16C15.5606,16,17.4756,12.325,17.9543,11.2C18.0047,11.075,18.0047,10.95,17.9543,10.825C17.4756,9.675,15.5606,6,11,6C6.43937,6,4.52441,9.675,4.04567,10.8ZM11,13.5C9.61417,13.5,8.480319999999999,12.375,8.480319999999999,11C8.480319999999999,9.625,9.61417,8.5,11,8.5C12.38583,8.5,13.5197,9.625,13.5197,11C13.5197,12.375,12.38583,13.5,11,13.5ZM11,9.5C10.1685,9.5,9.48819,10.175,9.48819,11C9.48819,11.825,10.1685,12.5,11,12.5C11.8315,12.5,12.51181,11.825,12.51181,11C12.51181,10.175,11.8315,9.5,11,9.5Z stroke-opacity=0 fill-opacity=1>');
const fi = () => ui();
var yi = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M5.80417,14.9887L4.62563,16.167299999999997C4.43037,16.3625,4.43037,16.6791,4.62563,16.8744C4.82089,17.0696,5.13748,17.0696,5.332739999999999,16.8744L6.62638,15.5807C7.75595,16.290100000000002,9.19328,16.7929,11,16.7929C16.165399999999998,16.7929,18.3323,12.64289,18.8866,11.36789C19.0378,10.99289,19.0378,10.59289,18.8866,10.21789C18.5549,9.45486,17.6456,7.66212,15.8617,6.34545L17.3536,4.853553C17.5488,4.658291,17.5488,4.341709,17.3536,4.146447C17.1583,3.9511845,16.8417,3.9511845,16.6464,4.146447L15.0014,5.7915399999999995C13.9314,5.1969,12.61166,4.792893,11,4.792893C5.80945,4.792893,3.667717,8.94289,3.113386,10.21789C2.9622049,10.59289,2.9622049,10.99289,3.113386,11.36789C3.424435,12.08333,4.2353000000000005,13.70399,5.80417,14.9887ZM7.36012,14.847C8.32327,15.4074,9.52286,15.7929,11,15.7929C15.5606,15.7929,17.4756,12.11789,17.9543,10.99289C18.0047,10.86789,18.0047,10.74289,17.9543,10.61789C17.659,9.90846,16.8171,8.23812,15.1447,7.06241L12.96929,9.23782C13.3134,9.66543,13.5197,10.20642,13.5197,10.79289C13.5197,12.16789,12.38583,13.29289,11,13.29289C10.41596,13.29289,9.87667,13.09308,9.44815,12.75896L7.36012,14.847ZM8.794609999999999,11.99829L6.520099999999999,14.2728C5.06905,13.12119,4.32057,11.628250000000001,4.04567,10.96789C3.995275,10.84289,3.995275,10.71789,4.04567,10.59289C4.52441,9.46789,6.43937,5.79289,11,5.79289C12.28868,5.79289,13.3661,6.086320000000001,14.2596,6.53329L12.19759,8.5953C11.84086,8.40257,11.43271,8.29289,11,8.29289C9.61417,8.29289,8.480319999999999,9.41789,8.480319999999999,10.79289C8.480319999999999,11.22918,8.594470000000001,11.64029,8.794609999999999,11.99829ZM10.16528,12.04183C10.404869999999999,12.20032,10.692070000000001,12.29289,11,12.29289C11.8315,12.29289,12.51181,11.61789,12.51181,10.79289C12.51181,10.48318,12.41593,10.194600000000001,12.25216,9.95494L10.16528,12.04183ZM11.43602,9.35687L9.55616,11.236740000000001C9.512,11.09633,9.48819,10.94724,9.48819,10.79289C9.48819,9.96789,10.1685,9.29289,11,9.29289C11.15142,9.29289,11.29782,9.31528,11.43602,9.35687Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const gi = () => yi();
var Ci = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><defs><clipPath id=master_svg0_151_625><rect x=0 y=0 width=22 height=22 rx=0></rect></clipPath></defs><g clip-path=url(#master_svg0_151_625)><path d=M14.5385,9.76923L15.6538,9.76923C16.6538,9.76923,17.4615,10.576920000000001,17.4615,11.576920000000001L17.4615,17.1923C17.4615,18.1923,16.6538,19,15.6538,19L5.80769,19C4.807692,19,4,18.1923,4,17.1923L4,11.576920000000001C4,10.576920000000001,4.807692,9.76923,5.80769,9.76923L7.23077,9.76923L7.23077,7.576919999999999C7.23077,5.61538,8.88462,4,10.88462,4C12.88462,4,14.5385,5.61538,14.5385,7.576919999999999L14.5385,9.76923ZM10.88461,5.15385C9.5,5.15385,8.38461,6.23077,8.38461,7.576919999999999L8.38461,9.76923L13.38462,9.76923L13.38462,7.576919999999999C13.38462,6.23077,12.26923,5.15385,10.88461,5.15385ZM15.6538,17.8462C16,17.8462,16.3077,17.5385,16.3077,17.1923L16.3077,11.576920000000001C16.3077,11.23077,16,10.923079999999999,15.6538,10.923079999999999L5.80769,10.923079999999999C5.46154,10.923079999999999,5.15385,11.23077,5.15385,11.576920000000001L5.15385,17.1923C5.15385,17.5385,5.46154,17.8462,5.80769,17.8462L15.6538,17.8462ZM10.153839999999999,12.65385C10.153839999999999,12.34615,10.42307,12.07692,10.73076,12.07692C11.038450000000001,12.07692,11.307680000000001,12.34615,11.307680000000001,12.65385L11.307680000000001,14.5769C11.307680000000001,14.8846,11.038450000000001,15.1538,10.73076,15.1538C10.42307,15.1538,10.153839999999999,14.8846,10.153839999999999,14.5769L10.153839999999999,12.65385Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const mi = () => Ci();
var hi = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><defs><clipPath id=master_svg0_151_620><rect x=0 y=0 width=22 height=22 rx=0></rect></clipPath></defs><g clip-path=url(#master_svg0_151_620)><path d=M8.38461,9.76923L15.6538,9.76923C16.6538,9.76923,17.4615,10.576920000000001,17.4615,11.576920000000001L17.4615,17.1923C17.4615,18.1923,16.6538,19,15.6538,19L5.80769,19C4.807692,19,4,18.1923,4,17.1923L4,11.576920000000001C4,10.576920000000001,4.807693,9.76923,5.80769,9.76923L7.23077,9.76923L7.23077,7.576919999999999C7.23077,5.61538,8.88462,4,10.88462,4C12.46154,4,13.84615,4.961539,14.3462,6.423080000000001C14.4615,6.73077,14.3077,7.038460000000001,14,7.15385C13.69231,7.26923,13.38461,7.11538,13.26923,6.80769C12.92308,5.80769,11.96154,5.15385,10.88462,5.15385C9.5,5.15385,8.38461,6.23077,8.38461,7.576919999999999L8.38461,9.76923ZM15.6538,17.8462C16,17.8462,16.3077,17.5385,16.3077,17.1923L16.3077,11.576920000000001C16.3077,11.23077,16,10.923079999999999,15.6538,10.923079999999999L5.80769,10.923079999999999C5.46154,10.923079999999999,5.15385,11.23077,5.15385,11.576920000000001L5.15385,17.1923C5.15385,17.5385,5.46154,17.8462,5.80769,17.8462L15.6538,17.8462ZM10.153839999999999,12.65385C10.153839999999999,12.34615,10.42307,12.07692,10.73076,12.07692C11.03846,12.07692,11.307690000000001,12.34615,11.307690000000001,12.65385L11.307690000000001,14.5769C11.307690000000001,14.8846,11.03846,15.1538,10.73076,15.1538C10.42307,15.1538,10.153839999999999,14.8846,10.153839999999999,14.5769L10.153839999999999,12.65385Z stroke-opacity=0 fill-rule=evenodd fill-opacity=1>');
const di = () => hi();
var pi = /* @__PURE__ */ C('<svg class=icon-overlay viewBox="0 0 22 22"><path d=M16.966900000000003,8.67144C16.6669,8.67144,16.4247,8.91558,16.4247,9.21802L16.4247,16.631500000000003C16.4247,17.322,16.007199999999997,17.9068,15.5139,17.9068L13.93072,17.9068L13.93072,9.2162C13.93072,8.91741,13.68675,8.67144,13.38855,8.67144C13.09036,8.67144,12.84639,8.91741,12.84639,9.21802L12.84639,17.9068L10.151810000000001,17.9068L10.151810000000001,9.21802C10.151810000000001,8.91741,9.90783,8.67144,9.609639999999999,8.67144C9.31145,8.67144,9.06747,8.91741,9.06747,9.219850000000001L9.06747,17.9068L7.48614,17.9068C6.99277,17.9068,6.5753,17.322,6.5753,16.631500000000003L6.5753,9.21802C6.5753,8.91558,6.333130000000001,8.67144,6.03313,8.67144C5.73313,8.67144,5.49096,8.91558,5.49096,9.21802L5.49096,16.631500000000003C5.49096,17.9378,6.385540000000001,19,7.48614,19L15.512,19C16.6127,19,17.509,17.9378,17.509,16.631500000000003L17.509,9.21802C17.509,8.91558,17.2669,8.67144,16.966900000000003,8.67144ZM18.4578,6.21183L4.542169,6.21183C4.243976,6.21183,4,6.45779,4,6.75841C4,7.05903,4.243976,7.30499,4.542169,7.30499L18.4578,7.30499C18.756,7.30499,19,7.05903,19,6.75841C19,6.45779,18.756,6.21183,18.4578,6.21183ZM8.68072,5.10045L14.3193,5.10045C14.6175,5.10045,14.8614,4.852666,14.8614,4.550225C14.8614,4.247783,14.6175,4,14.3193,4L8.68072,4C8.38253,4,8.13855,4.247783,8.13855,4.550225C8.13855,4.852666,8.38253,5.10045,8.68072,5.10045Z stroke-opacity=0 fill-opacity=1>');
const vi = () => pi(), _i = "指标", bi = "主图指标", $i = "副图指标", Li = "设置", xi = "时区", ki = "截屏", Ai = "全屏", wi = "退出全屏", Mi = "保存", Si = "确定", Ti = "取消", Ii = "MA(移动平均线)", Di = "EMA(指数平滑移动平均线)", Pi = "SMA", Bi = "BOLL(布林线)", Oi = "BBI(多空指数)", Ei = "SAR(停损点指向指标)", Ni = "VOL(成交量)", Ki = "MACD(指数平滑异同移动平均线)", ji = "KDJ(随机指标)", Fi = "RSI(相对强弱指标)", Qi = "BIAS(乖离率)", Ri = "BRAR(情绪指标)", Zi = "CCI(顺势指标)", zi = "DMI(动向指标)", Ui = "CR(能量指标)", Yi = "PSY(心理线)", Vi = "DMA(平行线差指标)", Hi = "TRIX(三重指数平滑平均线)", Gi = "OBV(能量潮指标)", Xi = "VR(成交量变异率)", Ji = "WR(威廉指标)", Wi = "MTM(动量指标)", qi = "EMV(简易波动指标)", es = "ROC(变动率指标)", ts = "PVT(价量趋势指标)", ns = "AO(动量震荡指标)", rs = "世界统一时间", as = "(UTC-10) 檀香山", is = "(UTC-8) 朱诺", ss = "(UTC-7) 洛杉矶", os = "(UTC-5) 芝加哥", cs = "(UTC-4) 多伦多", ls = "(UTC-3) 圣保罗", us = "(UTC+1) 伦敦", fs = "(UTC+2) 柏林", ys = "(UTC+3) 巴林", gs = "(UTC+4) 迪拜", Cs = "(UTC+5) 阿什哈巴德", ms = "(UTC+6) 阿拉木图", hs = "(UTC+7) 曼谷", ds = "(UTC+8) 上海", ps = "(UTC+9) 东京", vs = "(UTC+10) 悉尼", _s = "(UTC+12) 诺福克岛", bs = "水平直线", $s = "水平射线", Ls = "水平线段", xs = "垂直直线", ks = "垂直射线", As = "垂直线段", ws = "直线", Ms = "射线", Ss = "线段", Ts = "箭头", Is = "价格线", Ds = "价格通道线", Ps = "平行直线", Bs = "斐波那契回调直线", Os = "斐波那契回调线段", Es = "斐波那契圆环", Ns = "斐波那契螺旋", Ks = "斐波那契速度阻力扇", js = "斐波那契趋势扩展", Fs = "江恩箱", Qs = "矩形", Rs = "平行四边形", Zs = "圆", zs = "三角形", Us = "三浪", Ys = "五浪", Vs = "八浪", Hs = "任意浪", Gs = "ABCD形态", Xs = "XABCD形态", Js = "弱磁模式", Ws = "强磁模式", qs = "商品搜索", eo = "商品代码", to = "参数1", no = "参数2", ro = "参数3", ao = "参数4", io = "参数5", so = "周期", oo = "标准差", co = "蜡烛图类型", lo = "全实心", uo = "全空心", fo = "涨空心", yo = "跌空心", go = "OHLC", Co = "面积图", mo = "最新价显示", ho = "最高价显示", po = "最低价显示", vo = "指标最新值显示", _o = "价格轴类型", bo = "线性轴", $o = "百分比轴", Lo = "对数轴", xo = "倒置坐标", ko = "网格线显示", Ao = "恢复默认", wo = {
  indicator: _i,
  main_indicator: bi,
  sub_indicator: $i,
  setting: Li,
  timezone: xi,
  screenshot: ki,
  full_screen: Ai,
  exit_full_screen: wi,
  save: Mi,
  confirm: Si,
  cancel: Ti,
  ma: Ii,
  ema: Di,
  sma: Pi,
  boll: Bi,
  bbi: Oi,
  sar: Ei,
  vol: Ni,
  macd: Ki,
  kdj: ji,
  rsi: Fi,
  bias: Qi,
  brar: Ri,
  cci: Zi,
  dmi: zi,
  cr: Ui,
  psy: Yi,
  dma: Vi,
  trix: Hi,
  obv: Gi,
  vr: Xi,
  wr: Ji,
  mtm: Wi,
  emv: qi,
  roc: es,
  pvt: ts,
  ao: ns,
  utc: rs,
  honolulu: as,
  juneau: is,
  los_angeles: ss,
  chicago: os,
  toronto: cs,
  sao_paulo: ls,
  london: us,
  berlin: fs,
  bahrain: ys,
  dubai: gs,
  ashkhabad: Cs,
  almaty: ms,
  bangkok: hs,
  shanghai: ds,
  tokyo: ps,
  sydney: vs,
  norfolk: _s,
  horizontal_straight_line: bs,
  horizontal_ray_line: $s,
  horizontal_segment: Ls,
  vertical_straight_line: xs,
  vertical_ray_line: ks,
  vertical_segment: As,
  straight_line: ws,
  ray_line: Ms,
  segment: Ss,
  arrow: Ts,
  price_line: Is,
  price_channel_line: Ds,
  parallel_straight_line: Ps,
  fibonacci_line: Bs,
  fibonacci_segment: Os,
  fibonacci_circle: Es,
  fibonacci_spiral: Ns,
  fibonacci_speed_resistance_fan: Ks,
  fibonacci_extension: js,
  gann_box: Fs,
  rect: Qs,
  parallelogram: Rs,
  circle: Zs,
  triangle: zs,
  three_waves: Us,
  five_waves: Ys,
  eight_waves: Vs,
  any_waves: Hs,
  abcd: Gs,
  xabcd: Xs,
  weak_magnet: Js,
  strong_magnet: Ws,
  symbol_search: qs,
  symbol_code: eo,
  params_1: to,
  params_2: no,
  params_3: ro,
  params_4: ao,
  params_5: io,
  period: so,
  standard_deviation: oo,
  candle_type: co,
  candle_solid: lo,
  candle_stroke: uo,
  candle_up_stroke: fo,
  candle_down_stroke: yo,
  ohlc: go,
  area: Co,
  last_price_show: mo,
  high_price_show: ho,
  low_price_show: po,
  indicator_last_value_show: vo,
  price_axis_type: _o,
  normal: bo,
  percentage: $o,
  log: Lo,
  reverse_coordinate: xo,
  grid_show: ko,
  restore_default: Ao
}, Mo = "Indicator", So = "Main Indicator", To = "Sub Indicator", Io = "Setting", Do = "Timezone", Po = "Screenshot", Bo = "Full Screen", Oo = "Exit", Eo = "Save", No = "Confirm", Ko = "Cancel", jo = "MA(Moving Average)", Fo = "EMA(Exponential Moving Average)", Qo = "SMA", Ro = "BOLL(Bolinger Bands)", Zo = "BBI(Bull And Bearlndex)", zo = "SAR(Stop and Reverse)", Uo = "VOL(Volume)", Yo = "MACD(Moving Average Convergence / Divergence)", Vo = "KDJ(KDJ Index)", Ho = "RSI(Relative Strength Index)", Go = "BIAS(Bias Ratio)", Xo = "BRAR(情绪指标)", Jo = "CCI(Commodity Channel Index)", Wo = "DMI(Directional Movement Index)", qo = "CR(能量指标)", ec = "PSY(Psychological Line)", tc = "DMA(Different of Moving Average)", nc = "TRIX(Triple Exponentially Smoothed Moving Average)", rc = "OBV(On Balance Volume)", ac = "VR(Volatility Volume Ratio)", ic = "WR(Williams %R)", sc = "MTM(Momentum Index)", oc = "EMV(Ease of Movement Value)", cc = "ROC(Price Rate of Change)", lc = "PVT(Price and Volume Trend)", uc = "AO(Awesome Oscillator)", fc = "UTC", yc = "(UTC-10) Honolulu", gc = "(UTC-8) Juneau", Cc = "(UTC-7) Los Angeles", mc = "(UTC-5) Chicago", hc = "(UTC-4) Toronto", dc = "(UTC-3) Sao Paulo", pc = "(UTC+1) London", vc = "(UTC+2) Berlin", _c = "(UTC+3) Bahrain", bc = "(UTC+4) Dubai", $c = "(UTC+5) Ashkhabad", Lc = "(UTC+6) Almaty", xc = "(UTC+7) Bangkok", kc = "(UTC+8) Shanghai", Ac = "(UTC+9) Tokyo", wc = "(UTC+10) Sydney", Mc = "(UTC+12) Norfolk", Sc = "Horizontal Line", Tc = "Horizontal Ray", Ic = "Horizontal Segment", Dc = "Vertical Line", Pc = "Vertical Ray", Bc = "Vertical Segment", Oc = "Trend Line", Ec = "Ray", Nc = "Segment", Kc = "Arrow", jc = "Price Line", Fc = "Price Channel Line", Qc = "Parallel Line", Rc = "Fibonacci Line", Zc = "Fibonacci Segment", zc = "Fibonacci Circle", Uc = "Fibonacci Spiral", Yc = "Fibonacci Sector", Vc = "Fibonacci Extension", Hc = "Gann Box", Gc = "Rect", Xc = "Parallelogram", Jc = "Circle", Wc = "Triangle", qc = "Three Waves", el = "Five Waves", tl = "Eight Waves", nl = "Any Waves", rl = "ABCD Pattern", al = "XABCD Pattern", il = "Weak Magnet", sl = "Strong Magnet", ol = "Symbol Search", cl = "Symbol Code", ll = "Parameter 1", ul = "Parameter 2", fl = "Parameter 3", yl = "Parameter 4", gl = "Parameter 5", Cl = "Period", ml = "Standard Deviation", hl = "Candle Type", dl = "Candle Solid", pl = "Candle Stroke", vl = "Candle Up Stroke", _l = "Candle Down Stroke", bl = "OHLC", $l = "Area", Ll = "Show Last Price", xl = "Show Highest Price", kl = "Show Lowest Price", Al = "Show indicator's last value", wl = "Price Axis Type", Ml = "Normal", Sl = "Percentage", Tl = "Log", Il = "Reverse Coordinate", Dl = "Show Grids", Pl = "Restore Defaults", Bl = {
  indicator: Mo,
  main_indicator: So,
  sub_indicator: To,
  setting: Io,
  timezone: Do,
  screenshot: Po,
  full_screen: Bo,
  exit_full_screen: Oo,
  save: Eo,
  confirm: No,
  cancel: Ko,
  ma: jo,
  ema: Fo,
  sma: Qo,
  boll: Ro,
  bbi: Zo,
  sar: zo,
  vol: Uo,
  macd: Yo,
  kdj: Vo,
  rsi: Ho,
  bias: Go,
  brar: Xo,
  cci: Jo,
  dmi: Wo,
  cr: qo,
  psy: ec,
  dma: tc,
  trix: nc,
  obv: rc,
  vr: ac,
  wr: ic,
  mtm: sc,
  emv: oc,
  roc: cc,
  pvt: lc,
  ao: uc,
  utc: fc,
  honolulu: yc,
  juneau: gc,
  los_angeles: Cc,
  chicago: mc,
  toronto: hc,
  sao_paulo: dc,
  london: pc,
  berlin: vc,
  bahrain: _c,
  dubai: bc,
  ashkhabad: $c,
  almaty: Lc,
  bangkok: xc,
  shanghai: kc,
  tokyo: Ac,
  sydney: wc,
  norfolk: Mc,
  horizontal_straight_line: Sc,
  horizontal_ray_line: Tc,
  horizontal_segment: Ic,
  vertical_straight_line: Dc,
  vertical_ray_line: Pc,
  vertical_segment: Bc,
  straight_line: Oc,
  ray_line: Ec,
  segment: Nc,
  arrow: Kc,
  price_line: jc,
  price_channel_line: Fc,
  parallel_straight_line: Qc,
  fibonacci_line: Rc,
  fibonacci_segment: Zc,
  fibonacci_circle: zc,
  fibonacci_spiral: Uc,
  fibonacci_speed_resistance_fan: Yc,
  fibonacci_extension: Vc,
  gann_box: Hc,
  rect: Gc,
  parallelogram: Xc,
  circle: Jc,
  triangle: Wc,
  three_waves: qc,
  five_waves: el,
  eight_waves: tl,
  any_waves: nl,
  abcd: rl,
  xabcd: al,
  weak_magnet: il,
  strong_magnet: sl,
  symbol_search: ol,
  symbol_code: cl,
  params_1: ll,
  params_2: ul,
  params_3: fl,
  params_4: yl,
  params_5: gl,
  period: Cl,
  standard_deviation: ml,
  candle_type: hl,
  candle_solid: dl,
  candle_stroke: pl,
  candle_up_stroke: vl,
  candle_down_stroke: _l,
  ohlc: bl,
  area: $l,
  last_price_show: Ll,
  high_price_show: xl,
  low_price_show: kl,
  indicator_last_value_show: Al,
  price_axis_type: wl,
  normal: Ml,
  percentage: Sl,
  log: Tl,
  reverse_coordinate: Il,
  grid_show: Dl,
  restore_default: Pl
}, ue = {
  "zh-CN": wo,
  "en-US": Bl
};
function mu(e, t) {
  ue[e] = t;
}
const u = (e, t) => {
  var n;
  return ((n = ue[t]) == null ? void 0 : n[e]) ?? e;
}, Ol = {
  horizontalStraightLine: ta,
  horizontalRayLine: ra,
  horizontalSegment: ia,
  verticalStraightLine: oa,
  verticalRayLine: la,
  verticalSegment: fa,
  straightLine: ga,
  rayLine: ma,
  segment: da,
  arrow: va,
  priceLine: ba,
  priceChannelLine: La,
  parallelStraightLine: ka,
  fibonacciLine: wa,
  fibonacciSegment: Sa,
  fibonacciCircle: Ia,
  fibonacciSpiral: Pa,
  fibonacciSpeedResistanceFan: Oa,
  fibonacciExtension: Na,
  gannBox: ja,
  circle: Qa,
  triangle: Za,
  rect: Ua,
  parallelogram: Va,
  threeWaves: Ga,
  fiveWaves: Ja,
  eightWaves: qa,
  anyWaves: ti,
  abcd: ri,
  xabcd: ii,
  weak_magnet: oi,
  strong_magnet: li,
  lock: mi,
  unlock: di,
  visible: fi,
  invisible: gi,
  remove: vi
};
function El(e) {
  return [
    { key: "horizontalStraightLine", text: u("horizontal_straight_line", e) },
    { key: "horizontalRayLine", text: u("horizontal_ray_line", e) },
    { key: "horizontalSegment", text: u("horizontal_segment", e) },
    { key: "verticalStraightLine", text: u("vertical_straight_line", e) },
    { key: "verticalRayLine", text: u("vertical_ray_line", e) },
    { key: "verticalSegment", text: u("vertical_segment", e) },
    { key: "straightLine", text: u("straight_line", e) },
    { key: "rayLine", text: u("ray_line", e) },
    { key: "segment", text: u("segment", e) },
    { key: "arrow", text: u("arrow", e) },
    { key: "priceLine", text: u("price_line", e) }
  ];
}
function Nl(e) {
  return [
    { key: "priceChannelLine", text: u("price_channel_line", e) },
    { key: "parallelStraightLine", text: u("parallel_straight_line", e) }
  ];
}
function Kl(e) {
  return [
    { key: "circle", text: u("circle", e) },
    { key: "rect", text: u("rect", e) },
    { key: "parallelogram", text: u("parallelogram", e) },
    { key: "triangle", text: u("triangle", e) }
  ];
}
function jl(e) {
  return [
    { key: "fibonacciLine", text: u("fibonacci_line", e) },
    { key: "fibonacciSegment", text: u("fibonacci_segment", e) },
    { key: "fibonacciCircle", text: u("fibonacci_circle", e) },
    { key: "fibonacciSpiral", text: u("fibonacci_spiral", e) },
    { key: "fibonacciSpeedResistanceFan", text: u("fibonacci_speed_resistance_fan", e) },
    { key: "fibonacciExtension", text: u("fibonacci_extension", e) },
    { key: "gannBox", text: u("gann_box", e) }
  ];
}
function Fl(e) {
  return [
    { key: "xabcd", text: u("xabcd", e) },
    { key: "abcd", text: u("abcd", e) },
    { key: "threeWaves", text: u("three_waves", e) },
    { key: "fiveWaves", text: u("five_waves", e) },
    { key: "eightWaves", text: u("eight_waves", e) },
    { key: "anyWaves", text: u("any_waves", e) }
  ];
}
function Ql(e) {
  return [
    { key: "weak_magnet", text: u("weak_magnet", e) },
    { key: "strong_magnet", text: u("strong_magnet", e) }
  ];
}
const H = (e) => Ol[e.name](e.class);
var Rl = /* @__PURE__ */ C('<div class=klinecharts-pro-drawing-bar><span class=split-line></span><div class=item tabindex=0><span style=width:32px;height:32px></span><div class=icon-arrow><svg viewBox="0 0 4 6"><path d=M1.07298,0.159458C0.827521,-0.0531526,0.429553,-0.0531526,0.184094,0.159458C-0.0613648,0.372068,-0.0613648,0.716778,0.184094,0.929388L2.61275,3.03303L0.260362,5.07061C0.0149035,5.28322,0.0149035,5.62793,0.260362,5.84054C0.505822,6.05315,0.903789,6.05315,1.14925,5.84054L3.81591,3.53075C4.01812,3.3556,4.05374,3.0908,3.92279,2.88406C3.93219,2.73496,3.87113,2.58315,3.73964,2.46925L1.07298,0.159458Z stroke=none stroke-opacity=0></path></svg></div></div><div class=item><span style=width:32px;height:32px></span></div><div class=item><span style=width:32px;height:32px></span></div><span class=split-line></span><div class=item><span style=width:32px;height:32px>'), Zl = /* @__PURE__ */ C('<div class=item tabindex=0><span style=width:32px;height:32px></span><div class=icon-arrow><svg viewBox="0 0 4 6"><path d=M1.07298,0.159458C0.827521,-0.0531526,0.429553,-0.0531526,0.184094,0.159458C-0.0613648,0.372068,-0.0613648,0.716778,0.184094,0.929388L2.61275,3.03303L0.260362,5.07061C0.0149035,5.28322,0.0149035,5.62793,0.260362,5.84054C0.505822,6.05315,0.903789,6.05315,1.14925,5.84054L3.81591,3.53075C4.01812,3.3556,4.05374,3.0908,3.92279,2.88406C3.93219,2.73496,3.87113,2.58315,3.73964,2.46925L1.07298,0.159458Z stroke=none stroke-opacity=0>'), p9 = /* @__PURE__ */ C("<li><span style=padding-left:8px>");
const v9 = "drawing_tools", zl = (e) => {
  const [t, n] = b("horizontalStraightLine"), [r, a] = b("priceChannelLine"), [s, o] = b("circle"), [i, c] = b("fibonacciLine"), [f, l] = b("xabcd"), [y, d] = b("weak_magnet"), [$, I] = b("normal"), [F, K] = b(!1), [B, Q] = b(!0), [D, L] = b(""), Y = N(() => [{
    key: "singleLine",
    icon: t(),
    list: El(e.locale),
    setter: n
  }, {
    key: "moreLine",
    icon: r(),
    list: Nl(e.locale),
    setter: a
  }, {
    key: "polygon",
    icon: s(),
    list: Kl(e.locale),
    setter: o
  }, {
    key: "fibonacci",
    icon: i(),
    list: jl(e.locale),
    setter: c
  }, {
    key: "wave",
    icon: f(),
    list: Fl(e.locale),
    setter: l
  }]), q = N(() => Ql(e.locale));
  return (() => {
    var G = Rl(), w = G.firstChild, k = w.nextSibling, M = k.firstChild, X = M.nextSibling, l0 = X.firstChild, w1 = k.nextSibling, M1 = w1.firstChild, c1 = w1.nextSibling, P1 = c1.firstChild, B1 = c1.nextSibling, O1 = B1.nextSibling, E1 = O1.firstChild;
    return v(G, () => Y().map((x) => (() => {
      var R = Zl(), J = R.firstChild, s1 = J.nextSibling, S1 = s1.firstChild;
      return R.addEventListener("blur", () => {
        L("");
      }), J.$$click = () => {
        e.onDrawingItemClick({
          groupId: v9,
          name: x.icon,
          visible: B(),
          lock: F(),
          mode: $()
        });
      }, v(J, h(H, {
        get name() {
          return x.icon;
        }
      })), s1.$$click = () => {
        x.key === D() ? L("") : L(x.key);
      }, v(R, (() => {
        var m = N(() => x.key === D());
        return () => m() && h(q1, {
          class: "list",
          get children() {
            return x.list.map((g) => (() => {
              var p = p9(), _ = p.firstChild;
              return p.$$click = () => {
                x.setter(g.key), e.onDrawingItemClick({
                  name: g.key,
                  lock: F(),
                  mode: $()
                }), L("");
              }, v(p, h(H, {
                get name() {
                  return g.key;
                }
              }), _), v(_, () => g.text), p;
            })());
          }
        });
      })(), null), j(() => U(S1, "class", x.key === D() ? "rotate" : "")), R;
    })()), w), k.addEventListener("blur", () => {
      L("");
    }), M.$$click = () => {
      let x = y();
      $() !== "normal" && (x = "normal"), I(x), e.onModeChange(x);
    }, v(M, (() => {
      var x = N(() => y() === "weak_magnet");
      return () => x() ? (() => {
        var R = N(() => $() === "weak_magnet");
        return () => R() ? h(H, {
          name: "weak_magnet",
          class: "selected"
        }) : h(H, {
          name: "weak_magnet"
        });
      })() : (() => {
        var R = N(() => $() === "strong_magnet");
        return () => R() ? h(H, {
          name: "strong_magnet",
          class: "selected"
        }) : h(H, {
          name: "strong_magnet"
        });
      })();
    })()), X.$$click = () => {
      D() === "mode" ? L("") : L("mode");
    }, v(k, (() => {
      var x = N(() => D() === "mode");
      return () => x() && h(q1, {
        class: "list",
        get children() {
          return q().map((R) => (() => {
            var J = p9(), s1 = J.firstChild;
            return J.$$click = () => {
              d(R.key), I(R.key), e.onModeChange(R.key), L("");
            }, v(J, h(H, {
              get name() {
                return R.key;
              }
            }), s1), v(s1, () => R.text), J;
          })());
        }
      });
    })(), null), M1.$$click = () => {
      const x = !F();
      K(x), e.onLockChange(x);
    }, v(M1, (() => {
      var x = N(() => !!F());
      return () => x() ? h(H, {
        name: "lock"
      }) : h(H, {
        name: "unlock"
      });
    })()), P1.$$click = () => {
      const x = !B();
      Q(x), e.onVisibleChange(x);
    }, v(P1, (() => {
      var x = N(() => !!B());
      return () => x() ? h(H, {
        name: "visible"
      }) : h(H, {
        name: "invisible"
      });
    })()), E1.$$click = () => {
      e.onRemoveClick(v9);
    }, v(E1, h(H, {
      name: "remove"
    })), j(() => U(l0, "class", D() === "mode" ? "rotate" : "")), G;
  })();
};
e1(["click"]);
var _9 = /* @__PURE__ */ C("<li class=title>"), b9 = /* @__PURE__ */ C("<li class=row>");
const Ul = (e) => h(A1, {
  get title() {
    return u("indicator", e.locale);
  },
  width: 400,
  get onClose() {
    return e.onClose;
  },
  get children() {
    return h(q1, {
      class: "klinecharts-pro-indicator-modal-list",
      get children() {
        return [(() => {
          var t = _9();
          return v(t, () => u("main_indicator", e.locale)), t;
        })(), N(() => ["MA", "EMA", "SMA", "BOLL", "SAR", "BBI"].map((t) => {
          const n = e.mainIndicators.includes(t);
          return (() => {
            var r = b9();
            return r.$$click = (a) => {
              e.onMainIndicatorChange({
                name: t,
                paneId: "candle_pane",
                added: !n
              });
            }, v(r, h(d9, {
              checked: n,
              get label() {
                return u(t.toLowerCase(), e.locale);
              }
            })), r;
          })();
        })), (() => {
          var t = _9();
          return v(t, () => u("sub_indicator", e.locale)), t;
        })(), N(() => ["MA", "EMA", "VOL", "MACD", "BOLL", "KDJ", "RSI", "BIAS", "BRAR", "CCI", "DMI", "CR", "PSY", "DMA", "TRIX", "OBV", "VR", "WR", "MTM", "EMV", "SAR", "SMA", "ROC", "PVT", "BBI", "AO"].map((t) => {
          const n = t in e.subIndicators;
          return (() => {
            var r = b9();
            return r.$$click = (a) => {
              e.onSubIndicatorChange({
                name: t,
                paneId: e.subIndicators[t] ?? "",
                added: !n
              });
            }, v(r, h(d9, {
              checked: n,
              get label() {
                return u(t.toLowerCase(), e.locale);
              }
            })), r;
          })();
        }))];
      }
    });
  }
});
e1(["click"]);
function $9(e, t) {
  switch (e) {
    case "Etc/UTC":
      return u("utc", t);
    case "Pacific/Honolulu":
      return u("honolulu", t);
    case "America/Juneau":
      return u("juneau", t);
    case "America/Los_Angeles":
      return u("los_angeles", t);
    case "America/Chicago":
      return u("chicago", t);
    case "America/Toronto":
      return u("toronto", t);
    case "America/Sao_Paulo":
      return u("sao_paulo", t);
    case "Europe/London":
      return u("london", t);
    case "Europe/Berlin":
      return u("berlin", t);
    case "Asia/Bahrain":
      return u("bahrain", t);
    case "Asia/Dubai":
      return u("dubai", t);
    case "Asia/Ashkhabad":
      return u("ashkhabad", t);
    case "Asia/Almaty":
      return u("almaty", t);
    case "Asia/Bangkok":
      return u("bangkok", t);
    case "Asia/Shanghai":
      return u("shanghai", t);
    case "Asia/Tokyo":
      return u("tokyo", t);
    case "Australia/Sydney":
      return u("sydney", t);
    case "Pacific/Norfolk":
      return u("norfolk", t);
  }
  return e;
}
function Yl(e) {
  return [
    { key: "Etc/UTC", text: u("utc", e) },
    { key: "Pacific/Honolulu", text: u("honolulu", e) },
    { key: "America/Juneau", text: u("juneau", e) },
    { key: "America/Los_Angeles", text: u("los_angeles", e) },
    { key: "America/Chicago", text: u("chicago", e) },
    { key: "America/Toronto", text: u("toronto", e) },
    { key: "America/Sao_Paulo", text: u("sao_paulo", e) },
    { key: "Europe/London", text: u("london", e) },
    { key: "Europe/Berlin", text: u("berlin", e) },
    { key: "Asia/Bahrain", text: u("bahrain", e) },
    { key: "Asia/Dubai", text: u("dubai", e) },
    { key: "Asia/Ashkhabad", text: u("ashkhabad", e) },
    { key: "Asia/Almaty", text: u("almaty", e) },
    { key: "Asia/Bangkok", text: u("bangkok", e) },
    { key: "Asia/Shanghai", text: u("shanghai", e) },
    { key: "Asia/Tokyo", text: u("tokyo", e) },
    { key: "Australia/Sydney", text: u("sydney", e) },
    { key: "Pacific/Norfolk", text: u("norfolk", e) }
  ];
}
const Vl = (e) => {
  const [t, n] = b(e.timezone), r = N(() => Yl(e.locale));
  return h(A1, {
    get title() {
      return u("timezone", e.locale);
    },
    width: 320,
    get buttons() {
      return [{
        children: u("confirm", e.locale),
        onClick: () => {
          e.onConfirm(t()), e.onClose();
        }
      }];
    },
    get onClose() {
      return e.onClose;
    },
    get children() {
      return h(ce, {
        style: {
          width: "100%",
          "margin-top": "20px"
        },
        get value() {
          return t().text;
        },
        onSelected: (a) => {
          n(a);
        },
        get dataSource() {
          return r();
        }
      });
    }
  });
};
function L9(e) {
  return [
    {
      key: "candle.type",
      text: u("candle_type", e),
      component: "select",
      dataSource: [
        { key: "candle_solid", text: u("candle_solid", e) },
        { key: "candle_stroke", text: u("candle_stroke", e) },
        { key: "candle_up_stroke", text: u("candle_up_stroke", e) },
        { key: "candle_down_stroke", text: u("candle_down_stroke", e) },
        { key: "ohlc", text: u("ohlc", e) },
        { key: "area", text: u("area", e) }
      ]
    },
    {
      key: "candle.priceMark.last.show",
      text: u("last_price_show", e),
      component: "switch"
    },
    {
      key: "candle.priceMark.high.show",
      text: u("high_price_show", e),
      component: "switch"
    },
    {
      key: "candle.priceMark.low.show",
      text: u("low_price_show", e),
      component: "switch"
    },
    {
      key: "indicator.lastValueMark.show",
      text: u("indicator_last_value_show", e),
      component: "switch"
    },
    {
      key: "yAxis.type",
      text: u("price_axis_type", e),
      component: "select",
      dataSource: [
        { key: "normal", text: u("normal", e) },
        { key: "percentage", text: u("percentage", e) },
        { key: "log", text: u("log", e) }
      ]
    },
    {
      key: "yAxis.reverse",
      text: u("reverse_coordinate", e),
      component: "switch"
    },
    {
      key: "grid.show",
      text: u("grid_show", e),
      component: "switch"
    }
  ];
}
var Hl = /* @__PURE__ */ C("<div class=klinecharts-pro-setting-modal-content>"), Gl = /* @__PURE__ */ C("<span>");
const Xl = (e) => {
  const [t, n] = b(e.currentStyles), [r, a] = b(L9(e.locale));
  r1(() => {
    a(L9(e.locale));
  });
  const s = (o, i) => {
    const c = {};
    d0(c, o.key, i);
    const f = P.clone(t());
    d0(f, o.key, i), n(f), a(r().map((l) => ({
      ...l
    }))), e.onChange(c);
  };
  return h(A1, {
    get title() {
      return u("setting", e.locale);
    },
    width: 560,
    get buttons() {
      return [{
        children: u("restore_default", e.locale),
        onClick: () => {
          e.onRestoreDefault(r()), e.onClose();
        }
      }];
    },
    get onClose() {
      return e.onClose;
    },
    get children() {
      var o = Hl();
      return v(o, h(Xe, {
        get each() {
          return r();
        },
        children: (i) => {
          let c;
          const f = P.formatValue(t(), i.key);
          switch (i.component) {
            case "select": {
              c = h(ce, {
                style: {
                  width: "120px"
                },
                get value() {
                  return u(f, e.locale);
                },
                get dataSource() {
                  return i.dataSource;
                },
                onSelected: (l) => {
                  const y = l.key;
                  s(i, y);
                }
              });
              break;
            }
            case "switch": {
              const l = !!f;
              c = h(H4, {
                open: l,
                onChange: () => {
                  s(i, !l);
                }
              });
              break;
            }
          }
          return [(() => {
            var l = Gl();
            return v(l, () => i.text), l;
          })(), c];
        }
      })), o;
    }
  });
};
var Jl = /* @__PURE__ */ C("<img style=width:500px;margin-top:20px>");
const Wl = (e) => h(A1, {
  get title() {
    return u("screenshot", e.locale);
  },
  width: 540,
  get buttons() {
    return [{
      type: "confirm",
      children: u("save", e.locale),
      onClick: () => {
        const t = document.createElement("a");
        t.download = "screenshot", t.href = e.url, document.body.appendChild(t), t.click(), t.remove();
      }
    }];
  },
  get onClose() {
    return e.onClose;
  },
  get children() {
    var t = Jl();
    return j(() => U(t, "src", e.url)), t;
  }
}), ql = {
  AO: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 5 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 34 }
  ],
  BIAS: [
    { paramNameKey: "BIAS1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "BIAS2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "BIAS3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "BIAS4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "BIAS5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  BOLL: [
    { paramNameKey: "period", precision: 0, min: 1, default: 20 },
    { paramNameKey: "standard_deviation", precision: 2, min: 1, default: 2 }
  ],
  BRAR: [
    { paramNameKey: "period", precision: 0, min: 1, default: 26 }
  ],
  BBI: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 3 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_4", precision: 0, min: 1, default: 24 }
  ],
  CCI: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 20 }
  ],
  CR: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 26 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 10 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 20 },
    { paramNameKey: "params_4", precision: 0, min: 1, default: 40 },
    { paramNameKey: "params_5", precision: 0, min: 1, default: 60 }
  ],
  DMA: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 10 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 50 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 10 }
  ],
  DMI: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 14 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  EMV: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 14 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 9 }
  ],
  EMA: [
    { paramNameKey: "EMA1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "EMA2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "EMA3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "EMA4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "EMA5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  MTM: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  MA: [
    { paramNameKey: "MA1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "MA2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "MA3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "MA4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "MA5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  MACD: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 26 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 9 }
  ],
  OBV: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 30 }
  ],
  PVT: [],
  PSY: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  ROC: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  RSI: [
    { paramNameKey: "RSI1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "RSI2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "RSI3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "RSI4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "RSI5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  SMA: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 2 }
  ],
  KDJ: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 9 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 3 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 3 }
  ],
  SAR: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 2 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 2 },
    { paramNameKey: "params_3", precision: 0, min: 1, default: 20 }
  ],
  TRIX: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 12 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 9 }
  ],
  VOL: [
    { paramNameKey: "MA1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "MA2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "MA3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "MA4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "MA5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ],
  VR: [
    { paramNameKey: "params_1", precision: 0, min: 1, default: 26 },
    { paramNameKey: "params_2", precision: 0, min: 1, default: 6 }
  ],
  WR: [
    { paramNameKey: "WR1", precision: 0, min: 1, styleKey: "lines[0].color" },
    { paramNameKey: "WR2", precision: 0, min: 1, styleKey: "lines[1].color" },
    { paramNameKey: "WR3", precision: 0, min: 1, styleKey: "lines[2].color" },
    { paramNameKey: "WR4", precision: 0, min: 1, styleKey: "lines[3].color" },
    { paramNameKey: "WR5", precision: 0, min: 1, styleKey: "lines[4].color" }
  ]
};
var eu = /* @__PURE__ */ C("<div class=klinecharts-pro-indicator-setting-modal-content>"), tu = /* @__PURE__ */ C("<span>");
const nu = (e) => {
  const [t, n] = b(P.clone(e.params.calcParams)), r = (a) => ql[a];
  return h(A1, {
    get title() {
      return e.params.indicatorName;
    },
    width: 360,
    get buttons() {
      return [{
        type: "confirm",
        children: u("confirm", e.locale),
        onClick: () => {
          const a = r(e.params.indicatorName), s = [];
          P.clone(t()).forEach((o, i) => {
            !P.isValid(o) || o === "" ? "default" in a[i] && s.push(a[i].default) : s.push(o);
          }), e.onConfirm(s), e.onClose();
        }
      }];
    },
    get onClose() {
      return e.onClose;
    },
    get children() {
      var a = eu();
      return v(a, () => r(e.params.indicatorName).map((s, o) => [(() => {
        var i = tu();
        return v(i, () => u(s.paramNameKey, e.locale)), i;
      })(), h(le, {
        style: {
          width: "200px"
        },
        get value() {
          return t()[o] ?? "";
        },
        get precision() {
          return s.precision;
        },
        get min() {
          return s.min;
        },
        onChange: (i) => {
          const c = P.clone(t());
          c[o] = i, n(c);
        }
      })])), a;
    }
  });
};
var ru = /* @__PURE__ */ C('<svg viewBox="0 0 1024 1024"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z">'), au = /* @__PURE__ */ C("<img alt=symbol>"), iu = /* @__PURE__ */ C("<li><div><span>");
const su = (e) => {
  const [t, n] = b(""), [r] = je(t, e.datafeed.searchSymbols.bind(e.datafeed));
  return h(A1, {
    get title() {
      return u("symbol_search", e.locale);
    },
    width: 460,
    get onClose() {
      return e.onClose;
    },
    get children() {
      return [h(le, {
        class: "klinecharts-pro-symbol-search-modal-input",
        get placeholder() {
          return u("symbol_code", e.locale);
        },
        get suffix() {
          return ru();
        },
        get value() {
          return t();
        },
        onChange: (a) => {
          const s = `${a}`;
          n(s);
        }
      }), h(q1, {
        class: "klinecharts-pro-symbol-search-modal-list",
        get loading() {
          return r.loading;
        },
        get dataSource() {
          return r() ?? [];
        },
        renderItem: (a) => (() => {
          var s = iu(), o = s.firstChild, i = o.firstChild;
          return s.$$click = () => {
            e.onSymbolSelected(a), e.onClose();
          }, v(o, h(Z, {
            get when() {
              return a.logo;
            },
            get children() {
              var c = au();
              return j(() => U(c, "src", a.logo)), c;
            }
          }), i), v(i, () => a.shortName ?? a.ticker, null), v(i, () => `${a.name ? `(${a.name})` : ""}`, null), v(s, () => a.exchange ?? "", null), j(() => U(i, "title", a.name ?? "")), s;
        })()
      })];
    }
  });
};
e1(["click"]);
var ou = /* @__PURE__ */ C('<i class="icon-close klinecharts-pro-load-icon">'), cu = /* @__PURE__ */ C("<div class=klinecharts-pro-content><div class=klinecharts-pro-widget>");
function Q1(e, t, n, r) {
  return t === "VOL" && (r = {
    gap: {
      bottom: 2
    },
    ...r
  }), (e == null ? void 0 : e.createIndicator({
    name: t,
    // @ts-expect-error
    createTooltipDataSource: ({
      indicator: a,
      defaultStyles: s
    }) => {
      const o = [];
      return a.visible ? (o.push(s.tooltip.icons[1]), o.push(s.tooltip.icons[2]), o.push(s.tooltip.icons[3])) : (o.push(s.tooltip.icons[0]), o.push(s.tooltip.icons[2]), o.push(s.tooltip.icons[3])), {
        icons: o
      };
    }
  }, n, r)) ?? null;
}
const lu = (e) => {
  let t, n = null, r, a = !1;
  const [s, o] = b(e.theme), [i, c] = b(e.styles), [f, l] = b(e.locale), [y, d] = b(e.symbol), [$, I] = b(e.period), [F, K] = b(!1), [B, Q] = b([...e.mainIndicators]), [D, L] = b({}), [Y, q] = b(!1), [G, w] = b({
    key: e.timezone,
    text: $9(e.timezone, e.locale)
  }), [k, M] = b(!1), [X, l0] = b(), [w1, M1] = b(""), [c1, P1] = b(e.drawingBarVisible), [B1, O1] = b(!1), [E1, x] = b(!1), [R, J] = b({
    visible: !1,
    indicatorName: "",
    paneId: "",
    calcParams: []
  });
  e.ref({
    setTheme: o,
    getTheme: () => s(),
    setStyles: c,
    getStyles: () => n.getStyles(),
    setLocale: l,
    getLocale: () => f(),
    setTimezone: (m) => {
      w({
        key: m,
        text: $9(e.timezone, f())
      });
    },
    getTimezone: () => G().key,
    setSymbol: d,
    getSymbol: () => y(),
    setPeriod: I,
    getPeriod: () => $()
  });
  const s1 = () => {
    n == null || n.resize();
  }, S1 = (m, g, p) => {
    let _ = g, O = _;
    switch (m.timespan) {
      case "minute": {
        _ = _ - _ % (60 * 1e3), O = _ - p * m.multiplier * 60 * 1e3;
        break;
      }
      case "hour": {
        _ = _ - _ % (60 * 60 * 1e3), O = _ - p * m.multiplier * 60 * 60 * 1e3;
        break;
      }
      case "day": {
        _ = _ - _ % (60 * 60 * 1e3), O = _ - p * m.multiplier * 24 * 60 * 60 * 1e3;
        break;
      }
      case "week": {
        const V = new Date(_).getDay(), l1 = V === 0 ? 6 : V - 1;
        _ = _ - l1 * 60 * 60 * 24;
        const g1 = new Date(_);
        _ = (/* @__PURE__ */ new Date(`${g1.getFullYear()}-${g1.getMonth() + 1}-${g1.getDate()}`)).getTime(), O = p * m.multiplier * 7 * 24 * 60 * 60 * 1e3;
        break;
      }
      case "month": {
        const n1 = new Date(_), V = n1.getFullYear(), l1 = n1.getMonth() + 1;
        _ = (/* @__PURE__ */ new Date(`${V}-${l1}-01`)).getTime(), O = p * m.multiplier * 30 * 24 * 60 * 60 * 1e3;
        const g1 = new Date(O);
        O = (/* @__PURE__ */ new Date(`${g1.getFullYear()}-${g1.getMonth() + 1}-01`)).getTime();
        break;
      }
      case "year": {
        const V = new Date(_).getFullYear();
        _ = (/* @__PURE__ */ new Date(`${V}-01-01`)).getTime(), O = p * m.multiplier * 365 * 24 * 60 * 60 * 1e3;
        const l1 = new Date(O);
        O = (/* @__PURE__ */ new Date(`${l1.getFullYear()}-01-01`)).getTime();
        break;
      }
    }
    return [O, _];
  };
  return w9(() => {
    if (window.addEventListener("resize", s1), n = ge(t, {
      customApi: {
        formatDate: (g, p, _, O) => {
          switch ($().timespan) {
            case "minute":
              return O === N1.XAxis ? P.formatDate(g, p, "HH:mm") : P.formatDate(g, p, "YYYY-MM-DD HH:mm");
            case "hour":
              return O === N1.XAxis ? P.formatDate(g, p, "MM-DD HH:mm") : P.formatDate(g, p, "YYYY-MM-DD HH:mm");
            case "day":
            case "week":
              return P.formatDate(g, p, "YYYY-MM-DD");
            case "month":
              return O === N1.XAxis ? P.formatDate(g, p, "YYYY-MM") : P.formatDate(g, p, "YYYY-MM-DD");
            case "year":
              return O === N1.XAxis ? P.formatDate(g, p, "YYYY") : P.formatDate(g, p, "YYYY-MM-DD");
          }
          return P.formatDate(g, p, "YYYY-MM-DD HH:mm");
        }
      }
    }), n) {
      const g = n.getDom("candle_pane", N0.Main);
      if (g) {
        let _ = document.createElement("div");
        if (_.className = "klinecharts-pro-watermark", P.isString(e.watermark)) {
          const O = e.watermark.replace(/(^\s*)|(\s*$)/g, "");
          _.innerHTML = O;
        } else
          _.appendChild(e.watermark);
        g.appendChild(_);
      }
      const p = n.getDom("candle_pane", N0.YAxis);
      r = document.createElement("span"), r.className = "klinecharts-pro-price-unit", p == null || p.appendChild(r);
    }
    B().forEach((g) => {
      Q1(n, g, !0, {
        id: "candle_pane"
      });
    });
    const m = {};
    e.subIndicators.forEach((g) => {
      const p = Q1(n, g, !0);
      p && (m[g] = p);
    }), L(m), n == null || n.loadMore((g) => {
      a = !0, (async () => {
        const _ = $(), [O] = S1(_, g, 1), [n1] = S1(_, O, 500), V = await e.datafeed.getHistoryKLineData(y(), _, n1, O);
        n == null || n.applyMoreData(V, V.length > 0), a = !1;
      })();
    }), n == null || n.subscribeAction(Ce.OnTooltipIconClick, (g) => {
      if (g.indicatorName)
        switch (g.iconId) {
          case "visible": {
            n == null || n.overrideIndicator({
              name: g.indicatorName,
              visible: !0
            }, g.paneId);
            break;
          }
          case "invisible": {
            n == null || n.overrideIndicator({
              name: g.indicatorName,
              visible: !1
            }, g.paneId);
            break;
          }
          case "setting": {
            const p = n == null ? void 0 : n.getIndicatorByPaneId(g.paneId, g.indicatorName);
            J({
              visible: !0,
              indicatorName: g.indicatorName,
              paneId: g.paneId,
              calcParams: p.calcParams
            });
            break;
          }
          case "close":
            if (g.paneId === "candle_pane") {
              const p = [...B()];
              n == null || n.removeIndicator("candle_pane", g.indicatorName), p.splice(p.indexOf(g.indicatorName), 1), Q(p);
            } else {
              const p = {
                ...D()
              };
              n == null || n.removeIndicator(g.paneId, g.indicatorName), delete p[g.indicatorName], L(p);
            }
        }
    });
  }), L0(() => {
    window.removeEventListener("resize", s1), me(t);
  }), r1(() => {
    const m = y();
    m != null && m.priceCurrency ? (r.innerHTML = m == null ? void 0 : m.priceCurrency.toLocaleUpperCase(), r.style.display = "flex") : r.style.display = "none", n == null || n.setPriceVolumePrecision((m == null ? void 0 : m.pricePrecision) ?? 2, (m == null ? void 0 : m.volumePrecision) ?? 0);
  }), r1((m) => {
    if (!a) {
      m && e.datafeed.unsubscribe(m.symbol, m.period);
      const g = y(), p = $();
      return a = !0, x(!0), (async () => {
        const [O, n1] = S1(p, (/* @__PURE__ */ new Date()).getTime(), 500), V = await e.datafeed.getHistoryKLineData(g, p, O, n1);
        n == null || n.applyNewData(V, V.length > 0), e.datafeed.subscribe(g, p, (l1) => {
          n == null || n.updateData(l1);
        }), a = !1, x(!1);
      })(), {
        symbol: g,
        period: p
      };
    }
    return m;
  }), r1(() => {
    const m = s();
    n == null || n.setStyles(m);
    const g = m === "dark" ? "#929AA5" : "#76808F";
    n == null || n.setStyles({
      indicator: {
        tooltip: {
          icons: [{
            id: "visible",
            position: K1.Middle,
            marginLeft: 8,
            marginTop: 7,
            marginRight: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            icon: "",
            fontFamily: "icomoon",
            size: 14,
            color: g,
            activeColor: g,
            backgroundColor: "transparent",
            activeBackgroundColor: "rgba(22, 119, 255, 0.15)"
          }, {
            id: "invisible",
            position: K1.Middle,
            marginLeft: 8,
            marginTop: 7,
            marginRight: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            icon: "",
            fontFamily: "icomoon",
            size: 14,
            color: g,
            activeColor: g,
            backgroundColor: "transparent",
            activeBackgroundColor: "rgba(22, 119, 255, 0.15)"
          }, {
            id: "setting",
            position: K1.Middle,
            marginLeft: 6,
            marginTop: 7,
            marginBottom: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            icon: "",
            fontFamily: "icomoon",
            size: 14,
            color: g,
            activeColor: g,
            backgroundColor: "transparent",
            activeBackgroundColor: "rgba(22, 119, 255, 0.15)"
          }, {
            id: "close",
            position: K1.Middle,
            marginLeft: 6,
            marginTop: 7,
            marginRight: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            icon: "",
            fontFamily: "icomoon",
            size: 14,
            color: g,
            activeColor: g,
            backgroundColor: "transparent",
            activeBackgroundColor: "rgba(22, 119, 255, 0.15)"
          }]
        }
      }
    });
  }), r1(() => {
    n == null || n.setLocale(f());
  }), r1(() => {
    n == null || n.setTimezone(G().key);
  }), r1(() => {
    i() && (n == null || n.setStyles(i()), l0(k4(n.getStyles())));
  }), [ou(), h(Z, {
    get when() {
      return B1();
    },
    get children() {
      return h(su, {
        get locale() {
          return e.locale;
        },
        get datafeed() {
          return e.datafeed;
        },
        onSymbolSelected: (m) => {
          d(m);
        },
        onClose: () => {
          O1(!1);
        }
      });
    }
  }), h(Z, {
    get when() {
      return F();
    },
    get children() {
      return h(Ul, {
        get locale() {
          return e.locale;
        },
        get mainIndicators() {
          return B();
        },
        get subIndicators() {
          return D();
        },
        onClose: () => {
          K(!1);
        },
        onMainIndicatorChange: (m) => {
          const g = [...B()];
          m.added ? (Q1(n, m.name, !0, {
            id: "candle_pane"
          }), g.push(m.name)) : (n == null || n.removeIndicator("candle_pane", m.name), g.splice(g.indexOf(m.name), 1)), Q(g);
        },
        onSubIndicatorChange: (m) => {
          const g = {
            ...D()
          };
          if (m.added) {
            const p = Q1(n, m.name);
            p && (g[m.name] = p);
          } else
            m.paneId && (n == null || n.removeIndicator(m.paneId, m.name), delete g[m.name]);
          L(g);
        }
      });
    }
  }), h(Z, {
    get when() {
      return Y();
    },
    get children() {
      return h(Vl, {
        get locale() {
          return e.locale;
        },
        get timezone() {
          return G();
        },
        onClose: () => {
          q(!1);
        },
        onConfirm: w
      });
    }
  }), h(Z, {
    get when() {
      return k();
    },
    get children() {
      return h(Xl, {
        get locale() {
          return e.locale;
        },
        get currentStyles() {
          return P.clone(n.getStyles());
        },
        onClose: () => {
          M(!1);
        },
        onChange: (m) => {
          n == null || n.setStyles(m);
        },
        onRestoreDefault: (m) => {
          const g = {};
          m.forEach((p) => {
            const _ = p.key;
            d0(g, _, P.formatValue(X(), _));
          }), n == null || n.setStyles(g);
        }
      });
    }
  }), h(Z, {
    get when() {
      return w1().length > 0;
    },
    get children() {
      return h(Wl, {
        get locale() {
          return e.locale;
        },
        get url() {
          return w1();
        },
        onClose: () => {
          M1("");
        }
      });
    }
  }), h(Z, {
    get when() {
      return R().visible;
    },
    get children() {
      return h(nu, {
        get locale() {
          return e.locale;
        },
        get params() {
          return R();
        },
        onClose: () => {
          J({
            visible: !1,
            indicatorName: "",
            paneId: "",
            calcParams: []
          });
        },
        onConfirm: (m) => {
          const g = R();
          n == null || n.overrideIndicator({
            name: g.indicatorName,
            calcParams: m
          }, g.paneId);
        }
      });
    }
  }), h(q4, {
    get locale() {
      return e.locale;
    },
    get symbol() {
      return y();
    },
    get spread() {
      return c1();
    },
    get period() {
      return $();
    },
    get periods() {
      return e.periods;
    },
    onMenuClick: async () => {
      try {
        await Fe(() => P1(!c1())), n == null || n.resize();
      } catch {
      }
    },
    onSymbolClick: () => {
      O1(!B1());
    },
    onPeriodChange: I,
    onIndicatorClick: () => {
      K((m) => !m);
    },
    onTimezoneClick: () => {
      q((m) => !m);
    },
    onSettingClick: () => {
      M((m) => !m);
    },
    onScreenshotClick: () => {
      if (n) {
        const m = n.getConvertPictureUrl(!0, "jpeg", e.theme === "dark" ? "#151517" : "#ffffff");
        M1(m);
      }
    }
  }), (() => {
    var m = cu(), g = m.firstChild;
    v(m, h(Z, {
      get when() {
        return E1();
      },
      get children() {
        return h(oe, {});
      }
    }), g), v(m, h(Z, {
      get when() {
        return c1();
      },
      get children() {
        return h(zl, {
          get locale() {
            return e.locale;
          },
          onDrawingItemClick: (_) => {
            n == null || n.createOverlay(_);
          },
          onModeChange: (_) => {
            n == null || n.overrideOverlay({
              mode: _
            });
          },
          onLockChange: (_) => {
            n == null || n.overrideOverlay({
              lock: _
            });
          },
          onVisibleChange: (_) => {
            n == null || n.overrideOverlay({
              visible: _
            });
          },
          onRemoveClick: (_) => {
            n == null || n.removeOverlay({
              groupId: _
            });
          }
        });
      }
    }), g);
    var p = t;
    return typeof p == "function" ? x0(p, g) : t = g, j(() => U(g, "data-drawing-bar-visible", c1())), m;
  })()];
};
var uu = /* @__PURE__ */ C('<svg class=logo viewBox="0 0 80 92"><path d=M28.148808359375,51.7280513671875L22.963588359375,51.7280513671875C21.572648359375002,51.7280513671875,20.445068359375,52.6220613671875,20.445068359375,53.7248813671875L20.445068359375,72.3979013671875C20.445068359375,73.5007013671875,21.572648359375002,74.39470136718751,22.963588359375,74.39470136718751L33.926568359375,74.39470136718751C35.317468359375,74.39470136718751,36.445068359375,73.5007013671875,36.445068359375,72.3979013671875L36.445068359375,53.7248813671875C36.445068359375,52.6220613671875,35.317468359375,51.7280513671875,33.926568359375,51.7280513671875L28.741398359374998,51.7280513671875L28.741398359374998,46.2963223671875C28.741398359374998,46.1665793671875,28.608748359375,46.0614013671875,28.445108359375,46.0614013671875C28.281468359375,46.0614013671875,28.148808359375,46.1665793671875,28.148808359375,46.2963223671875L28.148808359375,51.7280513671875ZM28.741398359374998,74.3948013671875L28.741398359374998,79.82650136718749C28.741398359374998,79.9563013671875,28.608748359375,80.0614013671875,28.445108359375,80.0614013671875C28.281468359375,80.0614013671875,28.148808359375,79.9563013671875,28.148808359375,79.82650136718749L28.148808359375,74.3948013671875L28.741398359374998,74.3948013671875Z></path><path d=M51.148808359374996,44.7280513671875L45.963588359375,44.7280513671875C44.572648359375,44.7280513671875,43.445068359375,45.6220613671875,43.445068359375,46.7248813671875L43.445068359375,65.3979013671875C43.445068359375,66.5007013671875,44.572648359375,67.39470136718751,45.963588359375,67.39470136718751L56.926568359375,67.39470136718751C58.317468359375,67.39470136718751,59.445068359375,66.5007013671875,59.445068359375,65.3979013671875L59.445068359375,46.7248813671875C59.445068359375,45.6220613671875,58.317468359375,44.7280513671875,56.926568359375,44.7280513671875L51.741398359375,44.7280513671875L51.741398359375,39.2963223671875C51.741398359375,39.1665793671875,51.608748359375,39.0614013671875,51.445108359375,39.0614013671875C51.281468359375,39.0614013671875,51.148808359374996,39.1665793671875,51.148808359374996,39.2963223671875L51.148808359374996,44.7280513671875ZM51.741398359375,67.3948013671875L51.741398359375,72.82650136718749C51.741398359375,72.9563013671875,51.608748359375,73.0614013671875,51.445108359375,73.0614013671875C51.281468359375,73.0614013671875,51.148808359374996,72.9563013671875,51.148808359374996,72.82650136718749L51.148808359374996,67.3948013671875L51.741398359375,67.3948013671875Z></path><path d=M17.7274,90.6541C17.5901,90.6541,17.4517,90.6436,17.3121,90.6225C9.93219,89.5095,4.80718,86.7136,2.07787,82.3084C-1.1223,77.1437,0.241766,71.6314,0.56829,70.5137C5.37624,46.647,15.0785,38.4945,21.5025,33.0957C22.9683,31.8633,24.2342,30.7995,25.1676,29.7672C25.4105,29.4984,25.6051,29.2154,25.7556,28.9202C24.7465,29.2231,24.1971,29.4326,24.1703,29.4429C22.908,29.9368,21.4777,29.3247,20.9761,28.076C20.4756,26.8272,21.0897,25.4146,22.352,24.9172C22.5042,24.8571,23.5312,24.4607,25.3073,23.9616C24.087,21.4425,21.7693,18.7949,19.7125,16.6431L19.2819,16.1902C16.2438,12.9776,14.6017,4.80159,14.3036,3.19471C14.1306,2.26212,14.4636,1.30796,15.1814,0.679657C15.8995,0.0512175,16.8976,-0.159672,17.8125,0.123747C22.7731,1.66274,24.2638,1.81255,27.2321,2.11098C28.7357,2.26195,29.83,3.59029,29.6762,5.07662C29.5236,6.56295,28.182,7.64786,26.6784,7.49454C24.4992,7.27569,22.9517,7.09896,20.724,6.56646C21.4493,9.09088,22.3803,11.5427,23.2771,12.4919L23.6876,12.9237C25.3757,14.69,28.9691,18.45,30.7016,22.7299C35.0392,21.9433,40.8791,21.3359,47.7817,21.7249C48.2004,20.7386,48.8054,19.7953,49.5907,18.9135C49.7137,18.7754,49.8498,18.6502,49.9988,18.539C53.6142,15.8508,57.5491,12.857,59.7803,11.0758C58.1028,11.2502,56.1034,11.0278,53.9124,9.70882C53.2439,9.30622,52.5992,8.89427,51.9662,8.48933C48.4668,6.25164,46.497,5.12109,43.4234,5.94853C41.9647,6.34058,40.4622,5.48975,40.0659,4.04789C39.6695,2.60604,40.5296,1.11853,41.9871,0.726471C47.5602,-0.773825,51.4796,1.73271,54.9364,3.9434L54.9364,3.9434C55.5284,4.32176,56.1318,4.70797,56.7564,5.08482C58.3843,6.06556,59.4858,5.76127,61.2899,5.13865C62.3511,4.77234,63.5567,4.35687,64.8675,4.53476C66.3321,4.73254,67.4406,5.56933,67.9103,6.83096C68.7444,9.07333,67.1035,11.5533,65.5797,13.2374C64.6729,14.2394,60.0845,17.7606,56.4519,20.4957C56.9477,20.3369,57.4767,20.2511,58.026,20.2511C59.4281,20.2511,60.6982,20.8102,61.621,21.7153C65.4948,20.6901,67.87,17.9563,67.9033,17.9175C68.78,16.8888,70.3322,16.7577,71.3721,17.6226C72.412,18.4886,72.5457,20.0253,71.6702,21.054C71.5221,21.2286,69.5063,23.5492,66.0787,25.233C69.5399,26.8822,72.9993,29.682,74.1841,34.4145C74.5106,35.7206,73.7062,37.0407,72.3859,37.3638C72.1871,37.4117,71.9884,37.4351,71.792,37.4351C70.687,37.4351,69.6826,36.6932,69.4046,35.5848C68.4378,31.7217,64.8144,29.7431,61.7619,28.7456C60.8298,29.7349,59.5009,30.3535,58.026,30.3535C55.8642,30.3535,54.0162,29.0245,53.2713,27.1474C53.2022,27.138,53.1331,27.1287,53.0642,27.1195C54.232,29.5936,57.0851,31.9259,58.1868,32.665C58.3157,32.7516,58.4423,32.8523,58.5547,32.9599C66.5865,40.6151,72.4887,48.8133,76.0971,57.3287C76.6815,58.7074,76.0249,60.2932,74.6313,60.8702C74.2976,61.01,73.9388,61.082,73.576,61.082C72.5065,61.082,71.4914,60.4582,71.0525,59.4213C67.7577,51.6455,62.331,44.1074,54.9203,37.0116C53.6073,36.1009,48.0984,31.9917,47.2065,26.583C40.9421,26.2679,35.6187,26.8278,31.6725,27.5336C31.6197,29.527,30.9225,31.5172,29.2456,33.3731C28.0614,34.6827,26.5968,35.915,25.0446,37.2188C21.9414,39.8269,18.2648,42.9169,14.8104,48.1192C11.356,53.3215,8.12389,60.6361,5.9098,71.6934C5.88732,71.8035,5.85893,71.9123,5.82344,72.0188C5.81634,72.041,4.57886,76.0413,6.77344,79.5289C8.6332,82.4828,12.4557,84.4139,18.1367,85.2705C19.6297,85.4953,20.6566,86.8762,20.4295,88.3532C20.2213,89.6944,19.0559,90.6541,17.7274,90.6541ZM35.1195,7.03101C33.3502,7.03101,31.9158,5.61208,31.9158,3.86173C31.9158,2.11139,33.3502,0.69245,35.1195,0.69245C36.8889,0.69245,38.3233,2.11139,38.3233,3.86173C38.3233,5.61208,36.8889,7.03101,35.1195,7.03101ZM57.6848,23.1892L58.414,24.4754C58.8984,24.3623,59.3923,24.3435,59.8644,24.4203C60.2191,24.5005,60.5087,24.7182,60.6663,25.0229C60.8636,25.3394,60.8993,25.7346,60.7646,26.1094C60.5988,26.5176,60.2972,26.8749,59.9085,27.1235L60.31,27.8316L59.7886,28.1294L59.3994,27.443C58.9257,27.7175,58.399,27.883,57.8664,27.9247L57.3744,27.0569C57.6378,27.0741,57.9071,27.048,58.1704,26.9797C58.4501,26.9251,58.7239,26.8323,58.9829,26.7044L58.2801,25.4647C57.8047,25.5877,57.3167,25.6065,56.8549,25.5197C56.4913,25.4263,56.196,25.1971,56.0328,24.8814C55.8433,24.5561,55.8127,24.1572,55.9484,23.7789C56.088,23.373,56.3763,23.0149,56.7584,22.7726L56.4166,22.1699L56.938,21.8721L57.2727,22.4625C57.6615,22.2376,58.0888,22.0901,58.5254,22.0301L59.0042,22.8746C58.5548,22.8828,58.103,22.9906,57.6848,23.1892ZM56.9319,24.2961Q57.1278,24.6417,57.7863,24.5856L57.1695,23.4978Q56.6982,23.884,56.9319,24.2961ZM58.9077,25.3462L59.4981,26.3875L59.499,26.3891Q59.9965,26.0045,59.7628,25.5923Q59.573,25.2576,58.9077,25.3462ZM73.2212,66.5065C73.2212,68.2569,74.6555,69.6758,76.4249,69.6758C78.1943,69.6758,79.6286,68.2569,79.6286,66.5065C79.6286,64.7562,78.1943,63.3372,76.4249,63.3372C74.6555,63.3372,73.2212,64.7562,73.2212,66.5065ZM35.9465,91.8045C35.0734,91.8045,34.2038,91.7987,33.3378,91.7858C31.827,91.7636,30.6203,90.5359,30.6428,89.0402C30.6653,87.5457,31.9158,86.3297,33.4183,86.3742C49.6344,86.6059,65.7512,84.6175,67.6134,84.037C72.1953,82.4184,74.5295,79.3603,74.5295,74.9575C74.5295,73.463,75.754,72.2517,77.2648,72.2517C78.7755,72.2517,80,73.463,80,74.9575C80,81.5992,76.148,86.7686,69.4317,89.142C67.0041,89.9999,51.0955,91.8046,35.9465,91.8045ZM25.2731,92C23.5037,92,22.0693,90.5811,22.0693,88.8307C22.0693,87.0804,23.5037,85.6615,25.2731,85.6615C27.0424,85.6615,28.4768,87.0804,28.4768,88.8307C28.4768,90.5811,27.0424,92,25.2731,92Z>');
const fu = uu();
class hu {
  constructor(t) {
    C1(this, "_container");
    C1(this, "_chartApi", null);
    if (P.isString(t.container)) {
      if (this._container = document.getElementById(t.container), !this._container)
        throw new Error("Container is null");
    } else
      this._container = t.container;
    this._container.classList.add("klinecharts-pro"), this._container.setAttribute("data-theme", t.theme ?? "light"), We(() => {
      const n = this;
      return h(lu, {
        ref: (r) => {
          n._chartApi = r;
        },
        get styles() {
          return t.styles ?? {};
        },
        get watermark() {
          return t.watermark ?? fu;
        },
        get theme() {
          return t.theme ?? "light";
        },
        get locale() {
          return t.locale ?? "zh-CN";
        },
        get drawingBarVisible() {
          return t.drawingBarVisible ?? !0;
        },
        get symbol() {
          return t.symbol;
        },
        get period() {
          return t.period;
        },
        get periods() {
          return t.periods ?? [{
            multiplier: 1,
            timespan: "minute",
            text: "1m"
          }, {
            multiplier: 5,
            timespan: "minute",
            text: "5m"
          }, {
            multiplier: 15,
            timespan: "minute",
            text: "15m"
          }, {
            multiplier: 1,
            timespan: "hour",
            text: "1H"
          }, {
            multiplier: 2,
            timespan: "hour",
            text: "2H"
          }, {
            multiplier: 4,
            timespan: "hour",
            text: "4H"
          }, {
            multiplier: 1,
            timespan: "day",
            text: "D"
          }, {
            multiplier: 1,
            timespan: "week",
            text: "W"
          }, {
            multiplier: 1,
            timespan: "month",
            text: "M"
          }, {
            multiplier: 1,
            timespan: "year",
            text: "Y"
          }];
        },
        get timezone() {
          return t.timezone ?? "Asia/Shanghai";
        },
        get mainIndicators() {
          return t.mainIndicators ?? ["MA"];
        },
        get subIndicators() {
          return t.subIndicators ?? ["VOL"];
        },
        get datafeed() {
          return t.datafeed;
        }
      });
    }, this._container);
  }
  setTheme(t) {
    var n;
    (n = this._container) == null || n.setAttribute("data-theme", t), this._chartApi.setTheme(t);
  }
  getTheme() {
    return this._chartApi.getTheme();
  }
  setStyles(t) {
    this._chartApi.setStyles(t);
  }
  getStyles() {
    return this._chartApi.getStyles();
  }
  setLocale(t) {
    this._chartApi.setLocale(t);
  }
  getLocale() {
    return this._chartApi.getLocale();
  }
  setTimezone(t) {
    this._chartApi.setTimezone(t);
  }
  getTimezone() {
    return this._chartApi.getTimezone();
  }
  setSymbol(t) {
    this._chartApi.setSymbol(t);
  }
  getSymbol() {
    return this._chartApi.getSymbol();
  }
  setPeriod(t) {
    this._chartApi.setPeriod(t);
  }
  getPeriod() {
    return this._chartApi.getPeriod();
  }
}
Be.forEach((e) => {
  he(e);
});
export {
  Cu as DefaultDatafeed,
  hu as KLineChartPro,
  mu as loadLocales
};
//# sourceMappingURL=klinecharts-pro.js.map
