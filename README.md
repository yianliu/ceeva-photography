# Ceeva Photography

This is a photography portfolio build with Nuxt3 and Storyblok. It is deployed on Cloudflare.

https://ceevaphotography.com

## Deployment

### Nuxt Website

The website it self is automatically deployed on Cloudflare Pages triggered by git pushes

### Form Submission Handler

This function is deployed as a cloudflare fuction. To deploy, run

```
cd functions/form-submission-handler && wrangler deploy
```

### Form Submission Topic

The topic is deployed as an AWS resource. To deploy, run

```
cd terraform && terraform apply
```
