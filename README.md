# 💖 4 Years of Us — Interactive 4th Love Anniversary Website

A premium, cinematic, interactive 4th love anniversary website created for **Roja Karthik** by **Karthik**.

---

## ⚙️ Single Personalization Configuration File

All text, dates, PIN code, memory captions, love letters, and messages are controlled from a **single content configuration file**:

👉 **[`src/data/loveStory.ts`](file:///k:/Karthik/src/data/loveStory.ts)**

You do **NOT** need to touch any React components to change personal content!

---

## 🎯 Configured Personalization Highlights

- **Partner Name**: `Roja Karthik` (Nickname: `Roja`)
- **Anniversary Date**: `2 December 2022`
- **Secret Lock PIN**: `1721`
- **First In-Person Meeting**: `2 January 2023`
- **Relationship Origin**: `Best friends connected through late night phone calls`
- **Journey Timeline**:
  1. *Best Friends First* — Started as best friends sharing every detail.
  2. *Connected By Voice* — Late night phone calls before meeting in person.
  3. *Expressing Our Love* — 2nd December 2022 official anniversary.
  4. *First In-Person Meeting* — 2nd January 2023 holding hands in real life.
  5. *4 Years of Endless Love* — Four years together & forever.

---

## 📁 Asset Placement Guide

### 1. 📷 Photos (`src/assets/photos/`)
- Place your photo files inside `src/assets/photos/`.
- File naming structure:
  - `memory-01.jpg` — Late Night Phone Call Memory
  - `memory-02.jpg` — First Meeting Photo (02 Jan 2023)
  - `memory-03.jpg` — Best Friends Memory
  - `memory-04.jpg` — Date Walk Photo
  - `memory-05.jpg` — Sweet Moments Photo
  - `memory-06.jpg` — Anniversary / Recent Couple Photo
  - `journey-1.jpg` to `journey-5.jpg` — Timeline photos
- **Automatic Fallback**: If no photos are uploaded, the application automatically renders built-in custom romantic SVG illustrations so it looks stunning out of the box!

### 2. 🎵 Background Music (`src/assets/music/`)
- Download your favorite background music (Recommended: **Sita Ramam 2022 film BGM**).
- Save the audio file as `sita-ramam-bgm.mp3` inside `src/assets/music/`.
- In `src/data/loveStory.ts`, verify the path:
  ```ts
  musicUrl: "/src/assets/music/sita-ramam-bgm.mp3"
  ```
- **Automatic Fallback**: If the audio file is missing, the site synthesizes a dreamy, romantic ambient music-box chord progression via Web Audio API so music never breaks!

### 3. 🎨 Couple Illustrations (`src/assets/illustrations/`)
- Place optional custom couple vector/image artwork here.
- Built-in interactive SVG illustrations (hugging bears with pulsing hearts, blooming heart tree, wax-sealed love letter) render automatically if custom artwork is omitted.

### 4. ✍️ Personal Text (`src/data/loveStory.ts`)
- Open `src/data/loveStory.ts` in any text editor.
- Modify greetings, secret gate hint, letter paragraphs, butterfly whispers, virtual hug titles, or final question.

---

## 🚀 How to Run Locally

1. **Install dependencies** (if needed):
   ```bash
   npm install
   ```
2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
3. Open your browser at `http://127.0.0.1:5173/`.

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

---

## 🔒 Secret Lock PIN
- Default PIN: **`1721`**
- Enter **1 - 7 - 2 - 1** on the secret keypad to unlock the gift reveal!
