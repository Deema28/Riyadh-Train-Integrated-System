# Riyadh Train Integrated System

[![UI Test](https://github.com/deema28/Riyadh-Train-Integrated-System/actions/workflows/playwright.yml/badge.svg)](https://github.com/deema28/Riyadh-Train-Integrated-System/actions/workflows/playwright.yml)

A multi-page web application for Riyadh Metro riders: create an account, explore the metro lines on a map, check station schedules, and book and pay for tickets. Built as a software engineering team project at Imam Mohammad Ibn Saud Islamic University (Feb – Jul 2025).

**Live demo:** https://deema28.github.io/Riyadh-Train-Integrated-System/home.html

![Home page](images/homepage.jpeg)

## Features

- **Accounts:** sign up, log in, reset password, and a personal profile page
- **Metro maps:** light and dark versions of the metro line map
- **Schedules:** search stations and see departure and arrival times for each line
- **Tickets:** choose a ticket, pay, and get a confirmation page with a QR code
- **Arabic interface** throughout

## Tech stack

- HTML, CSS, JavaScript (no framework)
- GitHub Pages for hosting
- Playwright + GitHub Actions for an automated UI test on every push to `main`

## Project structure

```
├── home.html, login.html, signup.html, reset-password.html, profile.html
├── schedule.html, white-map.html, black-map.html
├── pages/          tickets, payment, success
├── css/            one stylesheet per page
├── js/             filter.js (schedules), zoom.js (maps), profile.js
├── images/
├── tests/          Playwright UI test
└── .github/workflows/playwright.yml
```

## Run locally

Open `home.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Testing

On every push to `main`, GitHub Actions runs a Playwright test that opens the live home page and checks that it loads. The HTML report is saved as a workflow artifact.

## Team

Sarah Almubarak · Bsmah Aljumah · **Deema Alsultan** · Nahed Almutairi · Buthaina Bin Humaid

**My contribution:** co-developed the web pages, contributed to requirements analysis, UML diagrams and system documentation, and set up the automated UI testing with Playwright and GitHub Actions.

