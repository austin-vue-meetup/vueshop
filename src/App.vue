<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container pt-5">
      <RouterView />
    </div>
  </div>
</template>
