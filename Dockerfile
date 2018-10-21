FROM mhart/alpine-node

# Set the default working directory
WORKDIR /usr/src

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --ignore-optional

# Copy the relevant files to the working directory
COPY . .

# Run tests
# RUN yarn test --ci

# Submit coverage
# RUN yarn coveralls

# Build and export the app
RUN yarn build && yarn export -o /public

# Copy root assets
COPY ./public /public
