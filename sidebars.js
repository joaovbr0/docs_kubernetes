/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'introducao',
      label: 'Introdução',
    },
    {
      type: 'category',
      label: 'Docker',
      collapsed: false,
      items: [
        'docker/build',
        'docker/push-gitlab',
        'docker/push-local-registry',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes — Workloads',
      items: [
        'kubernetes/namespace',
        'kubernetes/pods',
        'kubernetes/deployment',
        'kubernetes/configmap-secret',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes — Rede',
      items: [
        'kubernetes/service',
        'kubernetes/ingress',
        'kubernetes/ingress-traefik',
        'kubernetes/cert-manager',
        'kubernetes/load-balancer-ip',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes — Escalabilidade',
      items: [
        'kubernetes/hpa',
        'kubernetes/vpa',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes — Segurança e Acesso',
      items: [
        'kubernetes/rbac',
        'kubernetes/rbac-oidc-keycloak',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes — Segredos Externos',
      items: [
        'kubernetes/secrets-vault',
        'kubernetes/secrets-conjur',
      ],
    },
    {
      type: 'category',
      label: 'Kubernetes — Storage',
      items: [
        'kubernetes/storage',
      ],
    },
  ],
};

export default sidebars;
