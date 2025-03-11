# Tencent-Cloud-CDN-Purge-Paths-Cache
This action purges paths cache for Tencent Cloud CDN via Node SDK API.

[![Test](https://github.com/tardis-ksh/Tencent-Cloud-CDN-Purge-Paths-Cache/actions/workflows/test.yml/badge.svg)](https://github.com/tardis-ksh/Tencent-Cloud-CDN-Purge-Paths-Cache/actions/workflows/test.yml)

# Usage

```yaml
  - name: Tencent Cloud CDN Purge Paths Cache
    uses: tardis-ksh/Tencent-Cloud-CDN-Purge-Paths-Cache@v1
    with:
      paths: |
        https://test.ksh7.com
        https://test-2.ksh7.com
      secret-id: ${{secrets.SECRET_ID}}
      secret-key: ${{secrets.SECRET_KEY}}
      flush_type: delete
      url_encode: false
      area: mainland
      wait_flush_done: true
```

# Simple Usage

```yaml
  - name: Tencent Cloud CDN Purge Paths Cache
    uses: tardis-ksh/Tencent-Cloud-CDN-Purge-Paths-Cache@v1
    with:
      paths: https://test.ksh7.com
      secret-id: ${{secrets.SECRET_ID}}
      secret-key: ${{secrets.SECRET_KEY}}
```
