// Placeholder values only — DO NOT put real contact details here.
// At build time the "Generate production environment file" step in
// .github/workflows/deploy.yml overwrites this file with values from the
// CONTACT_PHONE / WA_NUMBER / INSTAGRAM_PAGE repository variables.
// If you ever see these literal PLACEHOLDER_* strings on the live site,
// the build-time injection did not run.
export const environment = {
  production: true,
  contactPhone: 'PLACEHOLDER_CONTACT_PHONE',
  waNumber: 'PLACEHOLDER_WA_NUMBER',
  instagram: 'PLACEHOLDER_INSTAGRAM_PAGE',
};
