FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG VITE_BASE=/
ARG SITE_CONTACT_JSON
RUN npm test && npm run build && npm run lint
FROM caddy:2-alpine
COPY --from=build /app/dist /srv
COPY start-static.sh /start-static.sh
RUN chmod +x /start-static.sh && chown -R 1000:1000 /srv
USER 1000:1000
ENV DEMO_MODE=off
EXPOSE 8080
CMD ["/start-static.sh"]
