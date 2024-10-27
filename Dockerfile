FROM denoland/deno as build
WORKDIR /app
COPY . .
RUN deno compile -A -o app main.ts

FROM gcr.io/distroless/cc-debian12
COPY --from=build /app /
CMD ["/app"]
