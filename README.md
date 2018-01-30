# [REST Charts](https://www.restcharts.com)

Generate PNG images of charts easily through a simple REST-like API.

Charts generated by [Highcharts](https://www.highcharts.com/)

![Red Area Chart](https://api.restcharts.com/chart/area?data=1,2,6,4,10,7,4,5,2,9,8&color=f00&height=150&width=200)

[Example: https://api.restcharts.com/chart/area?data=1,2,6,4,10,7,4,5,2,9,8&color=f00](https://api.restcharts.com/chart/area?data=1,2,6,4,10,7,4,5,2,9,8&color=f00)

## API

```sh
$ curl -X GET https://api.restcharts.com/chart/:type[?parameters]
```

or

```sh
$ curl -X POST https://api.restcharts.com/chart/:type -d [JSON parameters]
```

## Parameters

### Simple Params

#### URL parameters

- `type`: The type of the chart you want to generate. See all types [here](https://www.highcharts.com/docs/chart-and-series-types/chart-types).

#### Body/query string parameters

- `data`: Comma-delimited list of your data that needs to be charted.
If the `raw` config option (see [Advanced](#advanced-params) below) is not provided or it is but
a `series` array is not provided, this is a *required* parameter.
- `color`: The color of the line/bar/column/etc. of the chart.
- `bg`: The background color of (default: transparent, i.e. `rgba(0, 0, 0, 0)`)
- `height`: The height of the generated chart.
- `width`: The width of the generated chart.
- `opacity`: If an area chart (or variation), will be the opacity of the area.
- `linewidth`: If a line or spline chart, the line width of the lines.

### Advanced Params

If you want to generate a chart using the [advanced configuration](https://api.highcharts.com/highcharts/) provided by Highcharts
(the relevant options are the ones in the `Highcharts.chart()` method),
you can provide a raw config object with any available options you'd like
to provide for the chart type desired. Any configuration you have in the raw
parameter will override the default options.

- `raw`: The JSON serialized config object. If the `data` parameter is not
provided, a `series` array of data needs to be included here.

## Development

### Environment Variables

The following variables are required for the app to be deployed and
Highcharts installed correctly without problems. Please make sure you
have a Highcharts license per their requirements :)

1. ACCEPT_HIGHCHARTS_LICENSE=YES

### Build

```sh
$ gulp build
$ npm run dev
```
