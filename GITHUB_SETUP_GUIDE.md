# Portfolio Website - GitHub Setup & Customization Guide

This guide will walk you through the manual steps to create a GitHub repository for your portfolio website, push your code, and customize the repository settings.

## Phase 1: Create a New Repository on GitHub

1.  **Log in to GitHub:** Go to [github.com](https://github.com/) and log in to your account (`ambalavanan01`).
2.  **Create New Repo:** Click the **+** icon in the top-right corner and select **New repository**.
3.  **Repository Name:** Enter a name, for example: `portfolio` or `my-portfolio`.
4.  **Description:** (Optional) Enter a brief description like "My personal portfolio website showing my skills and projects."
5.  **Visibility:** Choose **Public** (recommended for a portfolio so everyone can see it).
6.  **Initialize:** **IMPORTANT:** Leave "Add a README file", ".gitignore", and "Choose a license" **UNCHECKED**. We will push your existing code from your computer.
7.  **Create:** Click the green **Create repository** button.

## Phase 2: Push Your Local Code to GitHub

Since you already have the files on your computer (`d:\New folder`), you need to connect this folder to the new GitHub repository.

1.  **Open Terminal:** Open a terminal or command prompt in your project folder (`d:\New folder`).
2.  **Initialize Git:** Run the following command to turn your folder into a Git repository:
    ```bash
    git init
    ```
3.  **Add Files:** Stage all your files (HTML, CSS, JS, Images, README) for the first commit:
    ```bash
    git add .
    ```
4.  **Commit:** Save the files to the history:
    ```bash
    git commit -m "Initial commit - Added portfolio website files"
    ```
5.  **Rename Branch:** Ensure the main branch is named `main`:
    ```bash
    git branch -M main
    ```
6.  **Connect to Remote:** Link your local folder to the GitHub repository you just created. Replace `<YOUR_REPO_URL>` with the URL from the page you saw after clicking "Create repository" (e.g., `https://github.com/ambalavanan01/portfolio.git`).
    ```bash
    git remote add origin https://github.com/ambalavanan01/portfolio.git
    ```
    *(Note: If you named it something else, copy the standard HTTPS URL provided by GitHub).*
7.  **Push:** Upload your files to GitHub:
    ```bash
    git push -u origin main
    ```

## Phase 3: Customize Repository Settings

Once your code is on GitHub, you can make it look professional.

### 1. **About Section (Sidebar)**
   - Go to your repository page (Code tab).
   - On the right sidebar, look for the **About** section and click the ⚙️ (gear) icon.
   - **Description:** "Personal portfolio of Ambalavanan - Full Stack Developer".
   - **Website:** You can add a link here later if you host it (see Phase 4).
   - **Topics:** Add tags like: `html`, `css`, `javascript`, `portfolio`, `web-development`.
   - Click **Save**.

### 2. **Social Preview**
   - Go to **Settings** > **General**.
   - Scroll down to **Social preview**.
   - Upload an image (you can use a screenshot of your website or your `profile.jpg`) so that when you share the link on social media, it looks good.

## Phase 4: Host Your Website (GitHub Pages)

You can host your portfolio for free directly on GitHub!

1.  Go to your repository **Settings**.
2.  On the left sidebar, click **Pages**.
3.  Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select **main** and folder **/(root)**.
5.  Click **Save**.
6.  Wait a minute or two. Refresh the page. You will see a message: "Your site is live at..."
    - The URL will look like: `https://ambalavanan01.github.io/portfolio/`

## Phase 5: Maintain Your Repo

Whenever you make changes to your code (e.g., update `index.html`):

1.  **Add changes:** `git add .`
2.  **Commit:** `git commit -m "Updated about section"`
3.  **Push:** `git push`

Your changes will automatically update on the GitHub repository and the live website (if Pages is enabled).
