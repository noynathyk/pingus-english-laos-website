# Security Guidelines

## Core Operating Principles

This project abides by the Kaona Technology Development Enterprise AI Development Standards v1.0. 
Security and data integrity supersede performance and speed of delivery.

### 1. Secrets Management
- NEVER hardcode API keys, tokens, or passwords directly in source files or configuration files.
- ALWAYS use environment variables (`.env`) for secrets during local development.
- ENSURE `.env` and `.env.local` are tracked in `.gitignore` to prevent leakage.
- Use CloudCannon environment variables to pass sensitive details safely to the production build pipeline.

### 2. Input Validation
- Client-side validation must be implemented on all form inputs or external data fetches.
- Prevent Cross-Site Scripting (XSS) by ensuring user-generated or fetched content is adequately sanitized before being rendered to the DOM (React inherently prevents most XSS natively, but caution is advised when using `dangerouslySetInnerHTML`).

### 3. File Security
- Only verified, safe file extensions are permissible. Ensure no executable code or unrecognized MIME types are processed via forms.
- Data transferred over the wire MUST enforce HTTPS in all API integrations and external links. 

### 4. Code Principles and Dependencies
- Follow KISS, DRY, and SOLID coding principles.
- Maintain a minimum dependency footprint. Before introducing new libraries via NPM, ensure they:
  - Have a good maintenance record.
  - Do not have unpatched CVEs.
  - Are explicitly required for the core functions of the website.
- Run security audits using `npm audit` periodically.
