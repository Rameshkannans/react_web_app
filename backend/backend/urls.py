from django.contrib import admin
from django.urls import path,include
from api.views import CreateUserView,UserInfoView, UserDetailsInfoView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from django.conf import settings
from django.conf.urls.static import static
from api.views import UserDetails
from rest_framework import routers

route = routers.DefaultRouter()
route.register("",UserDetails, basename='UserDetails')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/',CreateUserView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='get_token'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path('api-auth/', include("rest_framework.urls")),
    path('api/', include("api.urls")),
    path('api/user/info/', UserInfoView.as_view(), name='user_info'),
    path('api/profile/', UserDetailsInfoView.as_view(), name='userdetails_info'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

