"""Async Websocket RPC Provider."""
from typing import Any, Optional
import os

from ..types import URI


def get_default_endpoint() -> URI:
    """Get the default websocket rpc endpoint."""
    return URI(os.environ.get("SOLANARPC_Websocket_URI", "http://localhost:8900"))


class AsyncWebsocketProvider:
    """Async websocket provider to interact with the websocket rpc endpoint."""

    def __init__(self, endpoint: Optional[str] = None):
        """Init AsyncWebsocketProvider."""

        # all this from _HTTPProviderCore
        # self._request_counter = itertools.count()
        self.endpoint_uri = get_default_endpoint() if not endpoint else URI(endpoint)
        # self.health_uri = URI(f"{self.endpoint_uri}/health")
        # self.session = httpx.AsyncClient()

    def __str__(self) -> str:
        """String definition for WebsocketProvider."""
        return f"Async Websocket RPC connection {self.endpoint_uri}"
