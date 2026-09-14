
lambda { |stdout,stderr,status|
  output = stdout + stderr
  js_hint_pattern = /^(\d+) error(s?)/
  return :amber if js_hint_pattern.match(output)
  return :red   if /^AssertionError/.match(output)
  # node exits non-zero when a file it required threw. A run that printed the
  # green line and then died still died, and a test file that never parsed
  # proved nothing, so the status outranks the line.
  return :amber if status != 0
  return :green if /^All tests passed/.match(output)
  return :amber
}
