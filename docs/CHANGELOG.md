# Changelog

All notable changes to this project will be documented in this file.

## [1.0] - 2026-05-30
### Added
- Created the clean, production-ready Version 1.0 repository.
- Integrated CloudCannon configuration.
- Added comprehensive documentation (`docs/` directory).
- Added GitHub Actions workflows for UAT and Production validation.

### Changed
- Migrated files from the `Web Modern2/pingu's-english-laos` working directory.
- Reorganized project structures, excluding `.bak`, temporary, and unused test files.
- Purged unused image formats, standardizing on optimized `.webp` formats.
- Updated `.gitignore` to adhere strictly to Node and Vite environment conventions.

### Removed
- Unnecessary temporary development scripts (`test_server.js`, `inline_bundle.js`, `fix_bold.js`, `copy_to_sandbox.js`, `format_inline.js`).
- Duplicate/unused `.png` and `.jpg` artifacts in `public/pingu-images/`.
