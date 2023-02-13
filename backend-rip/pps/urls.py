from django.contrib import admin
from django.urls import include, path, re_path
from rest_framework import routers, permissions
from ppsproj import views as pps_views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny, )
)

router = routers.DefaultRouter()
router.register(r'auth', pps_views.Authorisation)
router.register(r'products', pps_views.Products)
router.register(r'providers', pps_views.Providers)
router.register(r'orders', pps_views.Orders)
router.register(r'shoppingcarts', pps_views.ShoppingCartView)

urlpatterns = [
    path('', include(router.urls)),
    path('isAuth/', pps_views.IsAuthorized.as_view()),
    path('admin/', admin.site.urls),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui')
]
