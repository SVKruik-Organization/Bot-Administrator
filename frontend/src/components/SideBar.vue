<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/UserStore';

export default defineComponent({
    name: "SideBarComponent",
    setup() {
        return {
            userStore: useUserStore()
        }
    },
});
</script>

<template>
    <header class="flex-col">
        <nav class="flex-col">
            <h2 class="logo">Flock</h2>
            <section class="user-information flex">
                <img :src="userStore.user.imageUrl" alt="Profile Picture">
                <div class="user-information-text flex-col">
                    <h3>{{ userStore.user.firstName }}</h3>
                    <p>{{ userStore.user.role }}</p>
                </div>
            </section>
            <RouterLink class="sidebar-link" to="/panel/dashboard">
                <i class="fa-regular fa-table-layout"></i>
                <p>Dashboard</p>
            </RouterLink>
            <section class="sidebar-content first-sidebar-content flex-col">
                <div class="sidebar-content-item flex-col">
                    <h4>Operations</h4>
                    <menu>
                        <RouterLink class="sidebar-link" to="/panel/operations/accounts">
                            <i class="fa-regular fa-user"></i>
                            <p>Accounts</p>
                        </RouterLink>
                        <RouterLink class="sidebar-link" to="/panel/operations/teams">
                            <i class="fa-regular fa-user-group"></i>
                            <p>Teams</p>
                        </RouterLink>
                        <RouterLink class="sidebar-link" to="/panel/operations/tickets">
                            <i class="fa-regular fa-bell"></i>
                            <p>Tickets</p>
                        </RouterLink>
                        <RouterLink class="sidebar-link" to="/panel/operations/tasks">
                            <i class="fa-regular fa-bars-progress"></i>
                            <p>Tasks</p>
                        </RouterLink>
                    </menu>
                </div>
                <div class="sidebar-content-item flex-col">
                    <h4>Documents</h4>
                    <menu>
                        <RouterLink class="sidebar-link" to="/panel/documents/finance">
                            <i class="fa-regular fa-credit-card"></i>
                            <p>Finance</p>
                        </RouterLink>
                        <RouterLink class="sidebar-link" to="/panel/documents/reports">
                            <i class="fa-regular fa-newspaper"></i>
                            <p>Reports</p>
                        </RouterLink>
                        <RouterLink class="sidebar-link" to="/panel/documents/staff">
                            <i class="fa-regular fa-shield-check"></i>
                            <p>Staff</p>
                        </RouterLink>
                    </menu>
                </div>
                <div class="sidebar-content-item flex-col">
                    <h4>Status</h4>
                    <menu>
                        <RouterLink class="sidebar-link" to="/panel/status/systems">
                            <i class="fa-regular fa-cloud"></i>
                            <p>Systems</p>
                        </RouterLink>
                        <RouterLink class="sidebar-link" to="/panel/status/automation">
                            <i class="fa-regular fa-timeline"></i>
                            <p>Automation</p>
                        </RouterLink>
                        <RouterLink class="sidebar-link" to="/panel/status/logs">
                            <i class="fa-regular fa-list"></i>
                            <p>Logs</p>
                        </RouterLink>
                    </menu>
                </div>
                <RouterLink class="sidebar-link" to="/panel/preferences">
                    <i class="fa-regular fa-gear"></i>
                    <p>Preferences</p>
                </RouterLink>
            </section>
        </nav>
    </header>
</template>

<style scoped>
header {
    gap: 0;
    width: 250px;
    background-color: var(--color-fill);
    height: 100vh;
    box-sizing: border-box;
    padding: 30px;
    position: fixed;
}

nav {
    gap: 40px;
    flex-grow: 1;
}

/* Header */
.user-information {
    gap: 15px;
}

.user-information-text {
    gap: 0;
    align-items: baseline;
}

img {
    height: 50px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
}

/* Content */
.sidebar-content,
.sidebar-content-item {
    gap: 0;
}

.sidebar-content {
    gap: 35px;
    flex-grow: 1;
}

.sidebar-content-item {
    gap: 15px;
}

.sidebar-link {
    display: flex;
    align-items: center;
    gap: 15px;
    height: 40px;
    border-radius: var(--border-radius-high);
    box-sizing: border-box;
    padding: 10px;
    margin-left: -10px;
}

.sidebar-link i {
    width: 15px;
    aspect-ratio: 1 / 1;
}

.first-sidebar-content {
    margin-top: -10px;
}

.sidebar-link:last-child {
    margin-top: auto;
}

/* Active Link */
.active-router-link {
    background-color: var(--color-fill-dark);
}

.active-router-link * {
    font-weight: 600;
}
</style>