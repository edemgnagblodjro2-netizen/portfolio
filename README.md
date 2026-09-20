# Portfolio — Ayaovi Edem Gnagblodjro

Site portfolio statique (HTML / CSS / JS pur, aucune dépendance de build) présentant CivicAI Inc.,
mon expérience TI / IAM / Microsoft 365, et mes projets SaaS.

## Structure

```
.
├── index.html        # Page unique du portfolio
├── css/style.css      # Styles (thème sombre, responsive)
├── js/script.js       # Menu mobile, animations au scroll
└── README.md
```

## Mettre le site en ligne avec GitHub Pages (gratuit)

1. Crée un nouveau dépôt sur GitHub, par exemple `portfolio` (public).
2. Dans ce dossier, initialise Git et pousse le contenu :

   ```bash
   git init
   git add .
   git commit -m "Premier déploiement du portfolio"
   git branch -M main
   git remote add origin https://github.com/<ton-nom-utilisateur>/portfolio.git
   git push -u origin main
   ```

3. Sur GitHub, va dans **Settings → Pages**.
4. Sous « Build and deployment », choisis **Source: Deploy from a branch**,
   puis **Branch: main** et le dossier **/ (root)**. Clique **Save**.
5. Après 1–2 minutes, ton site sera en ligne à :

   ```
   https://<ton-nom-utilisateur>.github.io/portfolio/
   ```

Pour un nom de dépôt de la forme `<ton-nom-utilisateur>.github.io`, le site sera directement
accessible à `https://<ton-nom-utilisateur>.github.io/` (sans sous-dossier).

## Personnaliser

- **Liens** : remplace les URL LinkedIn / GitHub / Play Store dans `index.html` (section `#contact`
  et carte « AttenteZero ») par tes vrais liens.
- **Photo** : pour ajouter une photo de profil, dépose une image dans `assets/`, puis ajoute
  une balise `<img>` dans la section `.hero` de `index.html`.
- **Couleurs** : les couleurs principales sont définies au début de `css/style.css` sous `:root`
  (`--accent`, `--accent-2`, `--bg`, etc.) — change-les pour ajuster l'identité visuelle.
- **CV téléchargeable** : dépose ton CV (`.pdf`) dans `assets/`, puis ajoute un bouton
  `<a href="assets/cv.pdf" download class="btn btn-ghost">Télécharger mon CV</a>` dans la section `.hero`.

## Tester en local

Aucune installation requise — ouvre simplement `index.html` dans un navigateur, ou lance un petit
serveur local :

```bash
python3 -m http.server 8000
```

puis visite `http://localhost:8000`.
