window.BENCHMARK_DATA = {
  "lastUpdate": 1783657382420,
  "repoUrl": "https://github.com/sonvt1710/websocketd",
  "entries": {
    "websocketd Performance": [
      {
        "commit": {
          "author": {
            "email": "joe@walnes.com",
            "name": "Joe Walnes",
            "username": "joewalnes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "450ea3abb1f342dafd1e3dfab423d41be96932e5",
          "message": "Run each benchmark scenario 3x and report the median; bump alert threshold\n\nA single k6 run on shared GitHub Actions runners can vary 20%+ between\notherwise-identical commits (observed directly this session: a docs-\nonly PR that touches zero Go code got flagged for a 24% peak-RSS\n\"regression\", and another PR was flagged 39-70% \"worse\" when the\nunderlying throughput numbers had actually improved). That noise was\nproducing false-positive regression alerts.\n\nrun.sh now repeats each scenario RUNS_PER_SCENARIO times (default 3,\n--runs=N to override; --runs=1 restores the old single-run behavior)\nand merges the results before handing off to the existing report/\nregression-detection scripts, which are otherwise unchanged:\n\n- lib/merge-runs.py takes the per-metric median across all N\n  *_summary.run{i}.json files (recursively, matching by JSON path -\n  robust to new metrics without code changes here) and writes it to\n  *_summary.json, same filename to-benchmark-action.py and\n  generate-report.py already read.\n- For server RSS/FDs, merging the time series wouldn't produce a real\n  one, so the run whose peak RSS is closest to the group's median is\n  used as *_server.ndjson instead - the HTML report's memory chart\n  still shows one genuine run, not a synthetic average.\n- If any of the N runs fails outright, the whole scenario is reported\n  as failed rather than silently averaging over fewer runs.\n\nVerified with a stub k6 emitting distinct per-invocation values: the\nmerged summary reports the correct median (tested {20,30,40} -> 30),\nthe server.ndjson selection picks the run with the median peak RSS\n(tested with synthetic {6000,9000,8000} KB -> correctly picked the\n8000 KB run), and a mid-run k6 failure correctly fails the whole\nscenario (exit code 1, no merged summary.json produced) exactly as\nthe prior single-run behavior did.\n\nAlso bumped alert-threshold from 15% to 25% - median-of-3 already\nremoves most of the noise, so this covers what's left rather than\ncarrying the full slack alone - and fixed bench/README's CI\nIntegration section, which still claimed regressions \"block merges\"\nthough that's been advisory-only (fail-on-alert: false) since the\nk6-install fix earlier this session.\n\n\nClaude-Session: https://claude.ai/code/session_01M882UWfvyaq5KGvaV37idr\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-07-09T18:01:51-07:00",
          "tree_id": "7d6594c540d943c1f285ea1b05e20277e6437fcd",
          "url": "https://github.com/sonvt1710/websocketd/commit/450ea3abb1f342dafd1e3dfab423d41be96932e5"
        },
        "date": 1783657382145,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "backpressure_msgs_echoed",
            "value": 149,
            "unit": "msgs (info only)"
          },
          {
            "name": "backpressure_delivery_ratio",
            "value": 0.0149,
            "unit": "ratio (info only)"
          },
          {
            "name": "backpressure_peak_rss_kb",
            "value": 13032,
            "unit": "KB"
          },
          {
            "name": "binary_10k_MB_sec",
            "value": 0.98,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_10k_peak_rss_kb",
            "value": 13640,
            "unit": "KB"
          },
          {
            "name": "binary_1k_MB_sec",
            "value": 0.1,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_1k_peak_rss_kb",
            "value": 13572,
            "unit": "KB"
          },
          {
            "name": "binary_64k_MB_sec",
            "value": 6.25,
            "unit": "MB/s (info only)"
          },
          {
            "name": "binary_64k_peak_rss_kb",
            "value": 13608,
            "unit": "KB"
          },
          {
            "name": "connection_churn_avg_ms",
            "value": 1.495,
            "unit": "ms"
          },
          {
            "name": "connection_churn_conns_sec",
            "value": 668.9,
            "unit": "conn/sec (info only)"
          },
          {
            "name": "connection_churn_peak_rss_kb",
            "value": 10880,
            "unit": "KB"
          },
          {
            "name": "connection_storm_100_p95",
            "value": 57,
            "unit": "ms"
          },
          {
            "name": "connection_storm_100_avg",
            "value": 36.41,
            "unit": "ms"
          },
          {
            "name": "connection_storm_100_peak_rss_kb",
            "value": 8592,
            "unit": "KB"
          },
          {
            "name": "connection_storm_10_p95",
            "value": 8.55,
            "unit": "ms"
          },
          {
            "name": "connection_storm_10_avg",
            "value": 6.5,
            "unit": "ms"
          },
          {
            "name": "connection_storm_10_peak_rss_kb",
            "value": 10940,
            "unit": "KB"
          },
          {
            "name": "connection_storm_500_p95",
            "value": 324.05,
            "unit": "ms"
          },
          {
            "name": "connection_storm_500_avg",
            "value": 232.396,
            "unit": "ms"
          },
          {
            "name": "connection_storm_500_peak_rss_kb",
            "value": 8576,
            "unit": "KB"
          },
          {
            "name": "echo_latency_p50",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "echo_latency_p95",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "echo_latency_p99",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "echo_latency_avg",
            "value": 0.139,
            "unit": "ms"
          },
          {
            "name": "echo_latency_peak_rss_kb",
            "value": 8812,
            "unit": "KB"
          },
          {
            "name": "echo_throughput_us_per_msg",
            "value": 28.647,
            "unit": "µs/msg"
          },
          {
            "name": "echo_throughput_msgs_sec",
            "value": 34907,
            "unit": "msgs/sec (info only)"
          },
          {
            "name": "echo_throughput_peak_rss_kb",
            "value": 15364,
            "unit": "KB"
          },
          {
            "name": "sustained_load_rtt_p50",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "sustained_load_rtt_p95",
            "value": 1,
            "unit": "ms"
          },
          {
            "name": "sustained_load_rtt_p99",
            "value": 0,
            "unit": "ms"
          },
          {
            "name": "sustained_load_total_msgs",
            "value": 174950,
            "unit": "msgs (info only)"
          },
          {
            "name": "sustained_load_peak_rss_kb",
            "value": 16208,
            "unit": "KB"
          }
        ]
      }
    ]
  }
}