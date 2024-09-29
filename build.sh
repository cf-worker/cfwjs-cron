# run only if in CI
"$WORKERS_CI" != "1" && exit 0
# append build time to index.js
bun --print '`BUILT_AT = "${new Date().toJSON()}"`' >> index.js
