FROM gitpod/workspace-full-vnc

USER gitpod

ARG DEBIAN_FRONTEND=noninteractive

# Install Cypress dependencies.
RUN sudo apt-get update \
 && sudo apt-get install -yq \
   libgtk2.0-0 \
   libgtk-3-0 \
   libnotify-dev \
   libgconf-2-4 \
   libnss3 \
   libxss1 \
   libasound2 \
   libxtst6 \
   xauth \
   xvfb \
 && sudo rm -rf /var/lib/apt/lists/*

# Install Chromium
RUN sudo apt-get update -q \
 && sudo apt-get install -yq \
   chromium-browser \
 && sudo rm -rf /var/lib/apt/lists/*