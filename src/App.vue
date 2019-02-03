<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-secondary">
      <div id="navbarNav" class="collapse navbar-collapse">
        <div class="navbar-nav">
          <RouterLink active-class="active" class="nav-item nav-link" to="/" exact>Home</RouterLink>
          <RouterLink active-class="active" class="nav-item nav-link" to="/admin">Admin</RouterLink>
        </div>
      </div>
    </nav>
    <div class="container pt-5">
      <RouterView />
    </div>
  </div>
</template>
