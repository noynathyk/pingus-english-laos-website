# Deployment Guide

The deployment strategy for the Pingu's English Laos website relies on a structured branch-based pipeline bridging Local Development, User Acceptance Testing (UAT), and Production via CloudCannon.

## Antigravity Local Development Workflow

1. Navigate to the local repository directory:
   `/Users/noynathykhamchalern/Documents/PGE Website/PingusEnglish-v1.0`
2. Install dependencies:
   `npm install`
3. Start the local development server:
   `npm run dev`
4. Test and validate all UI components, pages, and functionalities locally.
5. Create a production build locally to ensure no compilation errors:
   `npm run build`
6. Preview the production build:
   `npm run preview`
7. Once verified, commit changes to your current feature branch (`feature/*`) and merge to `develop` for UAT testing.

## GitHub Branch Strategy

- `main`: The production branch. Direct commits are restricted. Code here is actively deployed to the live production server (CloudCannon).
- `develop`: The UAT and integration branch. Connected to GitHub Pages for staging environments.
- `feature/*`: Short-lived branches created from `develop` for specific tasks or features.

## UAT Deployment (GitHub Pages)

**Source Branch:** `develop`

When a pull request or commit is merged into the `develop` branch, a GitHub Action (`deploy-uat.yml`) is automatically triggered.
1. The action checks out the repository.
2. Dependencies are installed (`npm ci`).
3. The Vite application is built (`npm run build`).
4. The static artifacts in `dist/` are deployed to GitHub Pages.

**Verification:**
Stakeholders evaluate the UAT link to confirm content, layout, navigation, and functionality match expectations before scheduling a release to `main`.

## Production Deployment (CloudCannon)

**Source Branch:** `main`

Once UAT has signed off on the `develop` branch, it is merged into the `main` branch. 
CloudCannon continuously monitors the `main` branch. Upon pushing to `main`:
1. CloudCannon automatically pulls the latest code.
2. It executes the install command: `npm install`
3. It executes the build command: `npm run build`
4. CloudCannon serves the generated output directory: `dist`

**Verification:**
Visit the live production URL (https://www.pingusenglishlaos.com) to verify successful deployment.

## Rollback and Release Procedures

**Rollbacks:**
If a critical issue is discovered in production:
1. Revert the problematic commit in the `main` branch, OR use `git checkout` to restore the previous stable release tag (e.g., `git checkout v1.0`).
2. Push the reverted/restored code back to `main`. CloudCannon will automatically rebuild and redeploy the previous stable version.

**Releases:**
Always tag stable production releases (e.g., `git tag v1.0`) in the `main` branch to ensure explicit tracking of what code is live at any given moment.
